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
    chunkFilename: "js/[name].bundle.[chunkhash:8].js",
  },

  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all",
        },
      },
    },
    // noEmitOnErrors: true,
    // namedModules: true,
    minimizer: [],
  },
  plugins: [plugin.terserPlugin, plugin.copyPlugin],
};
