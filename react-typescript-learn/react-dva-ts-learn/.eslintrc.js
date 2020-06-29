'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['react-app'],
  plugins: ['@typescript-eslint', 'eslint-comments', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: { semi: [2, 'always'], 'no-console': 1, 'react/style-prop-object': 2 }
};
