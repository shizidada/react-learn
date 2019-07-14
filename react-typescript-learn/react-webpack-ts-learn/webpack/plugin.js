const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");
const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("./path");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: "HtmlWebpackPlugin Title",
  filename: "index.html", //Name of file in ./dist/
  template: path.templatePath, //Name of template in ./src
  hash: true,
  inject: true, // 指定生成的<script></script>放在那个目录
  // minify: {
  //   removeRedundantAttributes: true, // 删除多余的属性
  //   collapseWhitespace: true, // 折叠空白区域
  //   removeAttributeQuotes: true, // 移除属性的引号
  //   removeComments: true, // 移除注释
  //   collapseBooleanAttributes: true, // 省略只有 boolean 值的属性值 例如：readonly checked
  // }, // 压缩 html 文件
  chunksSortMode: "dependency", // 成产环境下的第三方依赖进行压缩
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "css/[name].[contenthash:8].css",
  chunkFilename: "css/[name].[contenthash:8].css",
});

const checkerPlugin = new CheckerPlugin();

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

const progressPlugin = new webpack.ProgressPlugin();

const dllReferencePlugin = new webpack.DllReferencePlugin({
  manifest: require(path.manifestPath),
});

// 传递给 UglifyJS ：并行压缩输出JS代码
const parallelUglifyPlugin = new ParallelUglifyPlugin({
  uglifyJS: {
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true,
    },
    output: { comments: false, beautify: false },
  },
  sourceMap: false,
});

const uglifyJsPlugin = new UglifyJsPlugin();

const terserPlugin = new TerserPlugin();

const copyPlugin = new CopyPlugin([
  {
    from: path.buildPath,
    to: path.outputPath,
  },
]);

module.exports = {
  htmlWebpackPlugin,
  miniCssExtractPlugin,
  checkerPlugin,
  hotModulePlugin,
  progressPlugin,
  dllReferencePlugin,
  parallelUglifyPlugin,
  uglifyJsPlugin,
  terserPlugin,
  copyPlugin,
};
