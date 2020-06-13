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
    // stats: 'errors-only',
    // inline: true // Enable watch and live reload
    // hot: true, // enable HMR on the server
    // compress: true, // 开发服务器是否启动gzip等压缩
    // inline: true
  },
  plugins: []
};
