module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  settings: {
    react: {
      // Pragma to use, default to "React"
      pragma: 'React',

      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',

      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: '0.53' // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn"t set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' }
    ]
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: '@typescript-eslint/parser',

  extends: [
    // "eslint:recommended",
    'plugin:react/recommended'
    // 不能同时使用？？？
    // "plugin:@typescript-eslint/recommended",
  ],

  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // - eslint
    'no-console': 'warn',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'arrow-parens': 0
  }
};
