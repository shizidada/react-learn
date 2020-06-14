const loader = require('./loader');
const plugin = require('./plugin');
const path = require('./path');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['./index.tsx']
  },

  module: {
    rules: [loader.eslintLoader]
  },

  plugins: [plugin.bundleAnalyzerPlugin, plugin.miniCssExtractPlugin, plugin.hotModulePlugin],

  devServer: {
    contentBase: path.contextPath, // Content base
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true
  }
};
