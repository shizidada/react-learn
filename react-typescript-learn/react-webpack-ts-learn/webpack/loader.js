const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('./path');

const isProEnv = process.env.NODE_ENV === 'production';

const tsLoader = {
  test: /\.(ts|tsx)$/,
  loader: 'awesome-typescript-loader',
  options: {
    useBabel: true,
    babelCore: '@babel/core', // needed for Babel v7
    plugin: [['import', { libraryName: 'antd-mobile', style: true }]]
  }
};

const eslintLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  options: {
    formatter: require('eslint-friendly-formatter')
  }
};

const cssLoader = {
  test: /\.css$/,
  use: [
    isProEnv ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader'
  ]
};

const lessLoader = {
  test: /\.less$/,
  use: [
    isProEnv ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader',
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
};

const fileLoader = {
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'file-loader',
  options: {
    limit: 10240,
    name: 'img/[name].[ext]?[hash]'
  }
};

module.exports = {
  tsLoader,
  eslintLoader,
  cssLoader,
  lessLoader,
  fileLoader
};
