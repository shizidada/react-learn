/* eslint-disable @typescript-eslint/no-var-requires */
// const plugin = require("./plugin");
const path = require("./path");

module.exports = {
  mode: "production",

  devtool: "cheap-module-source-map",

  entry: {
    app: ["@babel/polyfill", "./index.tsx"],
  },

  output: {
    path: path.outputPath,
    filename: "js/[name].bundle.[chunkhash:8].js",
    chunkFilename: "js/[name].bundle.[chunkhash:8].js",
  },

  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },
    // noEmitOnErrors: true,
    // namedModules: true,
  },
  plugins: [],
};
