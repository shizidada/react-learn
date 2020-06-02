const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: "FaS",
  filename: "index.html", //Name of file in ./dist/
  template: "../public/index.html", //Name of template in ./src
  hash: true,
  // minify: {
  //   removeRedundantAttributes: true, // 删除多余的属性
  //   collapseWhitespace: true, // 折叠空白区域
  //   removeAttributeQuotes: true, // 移除属性的引号
  //   removeComments: true, // 移除注释
  //   collapseBooleanAttributes: true, // 省略只有 boolean 值的属性值 例如：readonly checked
  // }, // 压缩 html 文件
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "assets/css/[name].css",
  chunkFilename: "assets/css/[id].css",
});

const checkerPlugin = new CheckerPlugin();

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();
// 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
const noEmitErrorPlugin = new webpack.NoEmitOnErrorsPlugin();

module.exports = {
  htmlWebpackPlugin,
  miniCssExtractPlugin,
  checkerPlugin,
  hotModulePlugin,
  noEmitErrorPlugin,
};
