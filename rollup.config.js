import fs from 'fs';
import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import postCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const rootDir = path.resolve(__dirname, 'src');

const toPosix = (value) => value.split(path.sep).join('/');

const findEntryFile = (dir, name) => {
  const candidates = [
    path.join(dir, 'index.ts'),
    path.join(dir, 'index.tsx'),
    path.join(dir, `${name}.ts`),
    path.join(dir, `${name}.tsx`),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate));
};

const getComponentEntries = () => {
  const componentsDir = path.join(rootDir, 'components');
  return fs.readdirSync(componentsDir).reduce((entries, name) => {
    const fullPath = path.join(componentsDir, name);
    if (!fs.statSync(fullPath).isDirectory()) return entries;

    const entryFile = findEntryFile(fullPath, name);
    if (!entryFile) return entries;

    entries[`components/${name}`] = toPosix(path.relative(__dirname, entryFile));
    return entries;
  }, {});
};

const getFlatEntries = (relativeDir, prefix) => {
  const dir = path.join(rootDir, relativeDir);
  if (!fs.existsSync(dir)) return {};

  return fs.readdirSync(dir).reduce((entries, file) => {
    const fullPath = path.join(dir, file);
    if (!fs.statSync(fullPath).isFile()) return entries;

    if (!/\.(ts|tsx)$/.test(file) || /\.test\.(ts|tsx)$/.test(file)) return entries;

    const name = file.replace(/\.(ts|tsx)$/, '');
    entries[`${prefix}/${name}`] = toPosix(path.relative(__dirname, fullPath));
    return entries;
  }, {});
};

const inputEntries = {
  index: 'src/index.ts',
  ...getComponentEntries(),
  ...getFlatEntries('hooks', 'hooks'),
  ...getFlatEntries('utils', 'utils'),
};

const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

const isExternal = (id) => externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`));

const baseOutput = (dir, format) => ({
  dir,
  format,
  entryFileNames: '[name].js',
  chunkFileNames: 'chunks/[name]-[hash].js',
  sourcemap: true,
  exports: 'named',
});

const conf = {
  input: inputEntries,
  external: isExternal,
  treeshake: {
    moduleSideEffects: (id) => id.endsWith('.css'),
  },
  onwarn(warning, warn) {
    if (warning.code === 'EMPTY_BUNDLE') {
      return;
    }
    warn(warning);
  },
  output: [baseOutput('./dist/cjs', 'cjs'), baseOutput('./dist/esm', 'es')],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist/types',
          emitDeclarationOnly: false,
          rootDir: 'src',
          noEmit: false,
        },
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**', '**/__mocks__/**'],
      },
      clean: true,
    }),
    json(),
    postCSS({
      plugins: [require('autoprefixer')],
    }),
    copy({
      targets: [
        {
          src: 'src/styles/**/*',
          dest: 'dist/styles',
        },
      ],
    }),
    terser(),
  ],
};

export default conf;
