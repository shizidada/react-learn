const loader = require('./loader');
const plugin = require('./plugin');
const path = require('./path');

module.exports = {
  context: path.contextPath,

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.less', '.css']
  },

  module: {
    rules: [loader.tsLoader, loader.cssLoader, loader.lessLoader, loader.fileLoader]
  },
  plugins: [plugin.progressPlugin, plugin.htmlWebpackPlugin]
};
