const plugin = require("./plugin");
const path = require("./path");

module.exports = {
  mode: "development",

  devtool: "cheap-module-eval-source-map",

  entry: {
    app: ["@babel/polyfill", "./index.tsx"],
  },

  devServer: {
    contentBase: path.contextPath, // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 3000,
    stats: "errors-only",
    hot: true, // enable HMR on the server
    compress: true, // 开发服务器是否启动gzip等压缩
    inline: true,
    historyApiFallback: true,
  },
  plugins: [plugin.hotModulePlugin],
};
