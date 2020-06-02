/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");

const loader = require("./loader");
const plugin = require("./plugin");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "..", "src"),

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  module: {
    rules: [
      loader.eslintLoader,
      loader.tsLoader,
      loader.cssLoader,
      loader.sassLoader,
      loader.lessLoader,
      loader.fileLoader,
    ],
  },
  plugins: [plugin.htmlWebpackPlugin, plugin.miniCssExtractPlugin, plugin.checkerPlugin],
};
