const plugin = require('./plugin');
const path = require('./path');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['./index.tsx']
  },

  devServer: {
    contentBase: path.contextPath, // Content base
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [plugin.bundleAnalyzerPlugin]
};
