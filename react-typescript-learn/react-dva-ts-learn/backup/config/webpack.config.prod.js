/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.config.base");

const plugin = require("./plugin");

const basePath = __dirname;

module.exports = merge(baseConfig, {
  mode: "production",

  devtool: "cheap-module-source-map",

  entry: ["@babel/polyfill", "./index.tsx"],

  output: {
    path: path.join(basePath, "../dist"),
    filename: "assets/js/[name].[chunkhash:8].js",
    chunkFilename: "assets/js/[name].[chunkhash:8].js",
  },
  plugins: [plugin.noEmitErrorPlugin],
});
