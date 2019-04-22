const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ProgressBar = require("simple-progress-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const os = require("os");
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const isDev = process.env.NODE_ENV === "development";

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: resolve("index.html"),
  filename: "index.html",
  inject: true, // 指定生成的<script></script>放在那个目录
  // 去掉空格、注释、多余的应用等等都在这里配置
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
  },
  chunksSortMode: "dependency" // 成产环境下的第三方依赖进行压缩
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
  chunkFilename: "css/[name].[contenthash:8].css",
  disable: isDev
});

const analyzerOptions = {
  openAnalyzer: false
};
const analyzerPlugin = new BundleAnalyzerPlugin(analyzerOptions);

const progressBar = new ProgressBar({
  format: "compact"
});

const dllReferencePlugin = new webpack.DllReferencePlugin({
  context: __dirname,
  manifest: require("../dist/manifest.json")
});

const compressionWebpackPlugin = new CompressionWebpackPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  test: new RegExp("\\.(js|css)$"),
  threshold: 10240,
  minRatio: 0.8
});

module.exports = {
  htmlWebpackPlugin,
  happyPack,
  miniCssExtractPlugin,
  analyzerPlugin,
  progressBar,
  dllReferencePlugin,
  compressionWebpackPlugin
};
