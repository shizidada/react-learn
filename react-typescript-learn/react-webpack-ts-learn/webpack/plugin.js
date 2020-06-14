const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('./path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'FaS',
  filename: 'index.html', //Name of file in ./dist/
  template: path.templatePath, //Name of template in ./src
  hash: true,
  inject: true, // 指定生成的<script></script>放在那个目录
  minify: {
    removeRedundantAttributes: true, // 删除多余的属性
    collapseWhitespace: true, // 折叠空白区域
    removeAttributeQuotes: true, // 移除属性的引号
    removeComments: true, // 移除注释
    collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
  }, // 压缩 html 文件
  chunksSortMode: 'dependency' // 成产环境下的第三方依赖进行压缩
});

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

const progressPlugin = new webpack.ProgressPlugin();

const terserPlugin = new TerserPlugin();

const copyPlugin = new CopyPlugin([
  {
    from: path.buildPath,
    to: path.outputPath
  }
]);

const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin();

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

const cleanWebpackPlugin = new CleanWebpackPlugin();

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css',
  chunkFilename: 'css/[name].css',
  ignoreOrder: false
});

module.exports = {
  htmlWebpackPlugin,
  hotModulePlugin,
  progressPlugin,
  terserPlugin,
  copyPlugin,
  optimizeCSSAssetsPlugin,
  bundleAnalyzerPlugin,
  cleanWebpackPlugin,
  miniCssExtractPlugin
};
