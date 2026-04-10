/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// eslint.config.js

const js = require('@eslint/js');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const tseslint = require('typescript-eslint');
const tsRecommended = tseslint.plugin.configs['flat/recommended'];

module.exports = [
  js.configs.recommended,
  ...tsRecommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },
];
