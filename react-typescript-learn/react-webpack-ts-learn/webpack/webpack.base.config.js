const loader = require("./loader");
const plugin = require("./plugin");
const path = require("./path");

module.exports = {
  context: path.contextPath,

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  module: {
    rules: [
      loader.eslintLoader,
      loader.tsLoader,
      loader.cssLoader,
      loader.lessLoader,
      loader.fileLoader,
    ],
  },
  plugins: [
    plugin.progressPlugin,
    plugin.htmlWebpackPlugin,
    plugin.miniCssExtractPlugin,
    plugin.checkerPlugin,
  ],
};
