const path = require("path");
const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const plugin = require("./plugins");
const config = require("./config");
const prodConfig = {
  mode: config.prod.mode,

  devtool: false,

  entry: {
    app: [path.resolve(__dirname, "../src/index.js")]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "js/[name].[chunkhash:8].js",
    chunkFilename: "js/[name].[chunkhash:8].js"
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },
  plugins: [plugin.miniCssExtractPlugin]
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === "entry.app") {
      return b;
    }
    return undefined;
  }
})(baseConfig, prodConfig);
