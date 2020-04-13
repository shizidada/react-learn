const path = require("path");
const isDev = process.env.NODE_ENV === "development";

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

const babelLoader = {
  test: /\.(js|jsx)$/,
  //把对.js .jsx 的文件处理交给 id 为 happyBabel HappyPack 实例执行
  loader: "happypack/loader?id=happyBabel",
  //排除node_modules 目录下的文件
  exclude: /node_modules/
};

const cssLoader = {
  test: /\.css$/,
  use: [
    { loader: "style-loader", options: { sourceMap: isDev } },
    { loader: "css-loader", options: { sourceMap: isDev } }
  ]
};

const lessLoader = {
  test: /\.less$/,
  use: [
    { loader: "style-loader", options: { sourceMap: isDev } },
    { loader: "css-loader", options: { sourceMap: isDev } },
    { loader: "postcss-loader", options: { sourceMap: isDev } },
    { loader: "less-loader", options: { sourceMap: isDev, javascriptEnabled: true } }
  ]
};

module.exports = {
  babelLoader,
  cssLoader,
  lessLoader
};
