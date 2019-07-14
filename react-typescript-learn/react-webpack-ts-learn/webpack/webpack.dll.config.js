const webpack = require("webpack");
const path = require("./path");
const plugin = require("./plugin");
const pkg = require("../package.json");

module.exports = {
  mode: "development",
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.buildPath,
    filename: "[name].dll.js", // vendor.dll.js中暴露出的全局变量名。
    library: "[name]_library", // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    plugin.progressPlugin,
    // context: __dirname,
    new webpack.DllPlugin({ name: "[name]_library", path: path.manifestPath }),
  ],
};
