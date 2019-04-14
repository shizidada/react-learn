const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const isDev = process.env.NODE_ENV === "development";

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: resolve("index.html"),
  filename: "index.html"
});

const happyPack = new HappyPack({
  //用id来标识 happypack处理那里类文件
  id: "happyBabel",
  loaders: [
    {
      //如何处理  用法和loader 的配置一样
      loader: "babel-loader",
      options: {
        //生成cache缓存文件,提高编绎速度
        cacheDirectory: isDev ? resolve(".cache") : false,
        babelrc: true
      }
    }
  ],
  threadPool: happyThreadPool, //共享进程池
  verbose: true //允许 HappyPack 输出日志
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  //CSS提取
  filename: "css/[name].[contenthash:8].css",
  chunkFilename: "css/[name].[contenthash:8].css"
});

module.exports = {
  htmlWebpackPlugin,
  happyPack,
  miniCssExtractPlugin
};
