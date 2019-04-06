const webpack = require("webpack");
const path = require("path");
const lodash = require('lodash');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");

const ProgressBar = require("simple-progress-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("webpack-uglify-parallel");
const StatsPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const os = require("os");

// const addAssetHtml = new AddAssetHtmlPlugin({
//     filepath: path.resolve(__dirname, "build", "vendor.js"),
//     includeSourcemap: false
// });

const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

const html = new HtmlWebpackPlugin({
    filename: "index.html",
    template: "index.html"
});

const progress = function () {
    return new ProgressBar({
        format: "compact"
    });
};

const defaultOpenBrowserOptions = {
    url: "http://localhost:8080",
    delay: 1000
};

const openBrowser = function (options) {
    const openBrowserOptions = Object.assign(
        {}, defaultOpenBrowserOptions, options
    );
    return new OpenBrowserPlugin(openBrowserOptions);
};

const uglify = new UglifyJsPlugin({
    workers: os.cpus().length,
    compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
    },
    mangle: false,
    output: {
        comments: false,
        ascii_only: false
    }
});

const prodDefination = new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
});

const createClean = function () {
    return new CleanWebpackPlugin();
};

const cleanBundle = createClean();

const occurenceOrder = new webpack.optimize.OccurrenceOrderPlugin();

const stats = new StatsPlugin({
    filename: "stats.json",
    fields: null,
    stats: { chunkModules: true }
});

const hmr = new webpack.HotModuleReplacementPlugin();

const namedModules = new webpack.NamedModulesPlugin();

module.exports = {
    prodDefination,
    uglify,
    cleanBundle,
    occurenceOrder,
    stats,

    extractLess,
    html,
    
    hmr,
    namedModules,
    progress,
    openBrowser
};