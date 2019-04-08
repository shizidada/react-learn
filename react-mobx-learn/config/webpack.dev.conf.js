const baseConfig = require("./webpack.base.conf");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = Object.assign(baseConfig, {

    mode: "development",

    devtool: "cheap-module-eval-source-map",

    entry: {
        index: "../src/index.js"
    },

    devServer: {
        compress: true,
        port: 8080,
        historyApiFallback: true,
        disableHostCheck: true,
        // open: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            cache: true,
            filename: "index.html",
            template: "index.html"
        }),
    ]
});