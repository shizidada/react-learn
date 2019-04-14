// const webpack = require("webpack");
const path = require("path");

const plugins = require("./webpack.plugins");

console.log(process.env.NODE_ENV);
console.log(process.env.DEV_SERVER_PORT);
console.log(process.env.DEV_SERVER_HOST);
// /Users/taohua/works/Web works/react-learn/react-new/src
// console.log(path.resolve(__dirname, "..", "src"));

// /Users/taohua/works/Web works/react-learn/react-new/src/components
// console.log(path.resolve(__dirname, "../src/components/"));

module.exports = {
  // mode: "development",

  cache: true,

  context: path.resolve(__dirname, "..", "src"),

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "..", "build"), // 默认 dist
    publicPath: "/assets/", // 发布部署
    filename: "[name]-bundle.js",
    chunkFilename: "[name].[chunkhash:8].js"
  },

  module: {
    rules: [
      // JSX JS
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "..", "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            presets: [
              [
                "es2015",
                {
                  modules: false
                }
              ],
              "react",
              "stage-0"
            ],
            plugins: [
              "react-hot-loader/babel",
              "transform-runtime",
              "transform-decorators-legacy",
              "transform-object-rest-spread",
              [
                "babel-plugin-transform-builtin-extend",
                {
                  globals: ["Error", "Array"]
                }
              ],
              [
                "react-css-modules",
                {
                  context: path.resolve(__dirname, "..", "src"),
                  filetypes: {
                    ".less": "postcss-less"
                  },
                  webpackHotModuleReloading: true
                }
              ]
            ]
          }
        }
      },

      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //
      {
        //文件加载器，处理文件静态资源
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader?name=./fonts/[name].[ext]"
      },

      {
        //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        //如下配置，将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/,
        use: "url-loader?limit=8192&name=./img/[hash].[ext]"
      },

      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "..", "src")
          //   helpers.path("containers", Path.SRC),
          //   helpers.path("routes", Path.SRC)
        ],
        use: plugins.extractLess.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: false, // TODO
                localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "less-loader"
            }
          ],
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    plugins.html,
    // plugins.addAssetHtml,
    plugins.hmr,
    plugins.namedModules,
    plugins.extractLess
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, "..", "src"), // path.resolve();
      path.resolve(__dirname, "..", "node_modules") // node_modules
    ],
    alias: {
      components: path.resolve(__dirname, "../src/components/"),
      modles: path.resolve(__dirname, "../src/models/"),
      utils: path.resolve(__dirname, "../src/utils/")
    }
  }
};
