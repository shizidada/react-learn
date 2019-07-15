/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("./plugin");
const path = require("./path");

module.exports = {
  mode: "production",

  devtool: "none", //"cheap-module-source-map",

  entry: {
    app: ["@babel/polyfill", "./index.tsx"],
  },

  output: {
    path: path.outputPath,
    filename: "js/[name].bundle.[chunkhash:8].js",
    chunkFilename: "js/[id].chunk.[chunkhash:8].js",
  },

  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all", // 可选字符串值 initial、async、all
      minSize: 30000, //表示抽取出来的文件在压缩前的最小大小，默认为 30000；
      minChunks: 1, // 表示被引用次数，默认为1；
      maxAsyncRequests: 5, // 最大的按需(异步)加载次数，默认为 5；
      maxInitialRequests: 3, // 最大的初始化加载次数，默认为 3；
      name: false, // 抽取出来文件的名字，默认为 true，表示自动生成文件名；
      // 缓存组。
      cacheGroups: {
        vendor: {
          // 表示要过滤 modules，默认为所有的 modules，
          // 可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial", // 只对入口文件处理
          name: "chunks/vendor",
          priority: 1, // 表示抽取权重，数字越大表示优先级越高。
          reuseExistingChunk: true, // 可设置是否重用该chunk 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
        },
      },
    },
    // noEmitOnErrors: true,
    // namedModules: true,
    // minimizer: [],
  },
  plugins: [plugin.terserPlugin, plugin.copyPlugin],
};
