const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const plugin = require('./plugin');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: ['@babel/polyfill', '../src/index.tsx'],

  devServer: {
    contentBase: '../dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 3000,
    stats: 'errors-only',
    hot: true, // enable HMR on the server
    historyApiFallback: true,
  },
  plugins: [plugin.hotModulePlugin],
});
