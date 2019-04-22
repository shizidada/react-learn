const config = require("./config");
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");
const loader = require("./loaders");
const plugin = require("./plugins");

const devConfig = {
  mode: config.dev.mode,

  devtool: false, //config.dev.devtool,

  entry: {
    app: [path.resolve(__dirname, "../src/index.js")]
    // app: [path.resolve(__dirname, "../src/index2.js")]
  },
  output: {
    // path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].js?[hash]",
    chunkFilename: "[name].js?[hash]"
  },
  module: {
    rules: [loader.cssLoader, loader.lessLoader]
  },

  plugins: [plugin.progressBar, plugin.analyzerPlugin],

  devServer: {}
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === "entry.app") {
      return b;
    }
    return undefined;
  }
})(baseConfig, devConfig);
