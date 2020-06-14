const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('./path');

const tsLoader = {
  test: /\.(ts|tsx)$/,
  loader: 'awesome-typescript-loader',
  options: {
    useBabel: true,
    babelCore: '@babel/core' // needed for Babel v7
  },
  include: [path.contextPath],
  exclude: /node_modules/
};

const eslintLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [path.contextPath],
  exclude: /node_modules/,
  options: {
    formatter: require('eslint-friendly-formatter')
  }
};

const cssLoader = {
  test: /\.css$/,
  use: [
    // 'style-loader',
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader'
  ],
  include: [path.contextPath],
  exclude: /node_modules/
};

const lessLoader = {
  test: /\.less$/,
  use: [
    // 'style-loader',
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
    'less-loader'
  ],
  include: [path.contextPath],
  exclude: /node_modules/
};

const fileLoader = {
  test: /\.(png|jpg|gif|svg)$/,
  loader: 'file-loader',
  include: [path.contextPath],
  exclude: /node_modules/,
  options: {
    limit: 10240,
    name: 'img/[name].[ext]?[hash]'
  },
  exclude: /node_modules/
};

module.exports = {
  tsLoader,
  eslintLoader,
  cssLoader,
  lessLoader,
  fileLoader
};
