import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import postCSS from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const externalDeps = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

const baseOutput = (dir, format) => ({
  dir,
  format,
  preserveModules: true,
  preserveModulesRoot: 'src',
  entryFileNames: '[name].js',
  sourcemap: true,
});

const conf = {
  input: 'src/index.ts',
  output: [baseOutput('./dist/cjs', 'cjs'), baseOutput('./dist/esm', 'es')],
  external: externalDeps,
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
