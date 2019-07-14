const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("./path");

const tsLoader = {
  test: /\.(ts|tsx)$/,
  loader: "awesome-typescript-loader",
  options: {
    useBabel: true,
    babelCore: "@babel/core", // needed for Babel v7
  },
  include: [path.contextPath],
  exclude: /node_modules/,
};

const eslintLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  loader: "eslint-loader",
  enforce: "pre",
  include: [path.contextPath],
  exclude: /node_modules/,
  options: {
    // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
    formatter: require("eslint-friendly-formatter"), // 指定错误报告的格式规范
  },
};

const cssLoader = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
  include: [path.contextPath],
  exclude: /node_modules/,
};

const sassLoader = {
  test: /\.(sa|sc)ss$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
  include: [path.contextPath],
  exclude: /node_modules/,
};

const fileLoader = {
  test: /\.(png|jpg|gif|svg)$/,
  loader: "file-loader",
  include: [path.contextPath],
  exclude: /node_modules/,
  options: {
    limit: 10240,
    name: "img/[name].[ext]?[hash]",
  },
};

module.exports = {
  tsLoader,
  eslintLoader,
  cssLoader,
  sassLoader,
  fileLoader,
};
