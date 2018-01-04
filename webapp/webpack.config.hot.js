var baseConfig = require("./webpack.config.development");
var config = Object.create(baseConfig);

// 注入webpack-hot-server到待调试文件
config.entry = {
    index: "./app/js/index.jsx",
};
config.output["publicPath"] = "http://localhost:9090/assets/";
// react hot loader plugin
config.module.rules[0].use.unshift("react-hot-loader");

module.exports = config;