const path = require("path");
const webpack = require("webpack");
var packageJSON = require("../package.json");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: "development",

  entry: {
    vendor: Object.keys(packageJSON.dependencies)
  },
  output: {
    // 打包后文件输出的位置
    path: resolve("dist/js"),
    filename: "[name].dll.js", // vendor.dll.js中暴露出的全局变量名。
    library: "[name]_library" // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_library",
      path: resolve("dist/manifest.json")
    })
  ]
};
