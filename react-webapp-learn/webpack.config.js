var path = require("path");
var webpack = require("webpack");
var glob = require("glob");
var node_modules_dir = path.join(__dirname, "node_modules");
var deps = [];
require("babel-polyfill");

var moduleCSSLoader = {
    loader: "css-loader",
    options: {
        sourceMap: true,
        modules: true,
        localIdentName: "[name]__[local]___[hash:base64:5]",
    },
};

var config = {
    //入口文件
    entry: {
        // app
        index: './app/js/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, "assets"), //打包后的文件存放的地方
        filename: "[name].bundle.js" //打包后输出文件的文件名
    },
    resolve: {
        alias: {},
        modules: [
            path.resolve("./app"),
            path.resolve("./app/js"),
            path.resolve("./app/js/components"),
            path.resolve("./assets/css"),
            "node_modules",
        ],
        extensions: [".js", ".jsx", ".css", ".less", ".json"],
    },
    cache: true,
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, "app/js"),
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-0',
                    ],
                    cacheDirectory: true,
                },
            }],
        }, {
            test: /\.less$/,
            include: path.join(__dirname, "app/js"),
            use: [
                "style-loader",
                moduleCSSLoader, {
                    loader: "less-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ],
        }, {
            test: /\.less$/,
            exclude: path.join(__dirname, "app/js"),
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ],
        }, {
            test: /\.css$/,
            include: path.join(__dirname, "app/js"),
            use: [
                "style-loader",
                moduleCSSLoader,
            ],
        }, {
            test: /\.css$/,
            exclude: path.join(__dirname, "app/js"),
            use: [
                "style-loader", {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                },
            ],
        }, {
            test: /\.(jpe?g|gif|png)$/,
            use: ["file-loader"],
        }, {
          test: /\.jsx$/,
          include: glob.sync('./app/js/*.jsx').map((p) => path.join(__dirname, p)),
          use: [{ 
                loader: 'imports-loader', 
                options: { 
                    globalStyle: 'less/global.less', 
                    // globalConfig: 'utils/config'
                    }
                }
            ]
        }],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./assets/dll/react-manifest.json"),
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require("./assets/dll/utils-manifest.json"),
        }),
        new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
            }
        }),
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
};

deps.forEach(function(dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});

module.exports = config;