const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack/webpack.base.config");

const envs = {
  development: "dev",
  production: "prod",
};
const env = envs[process.env.NODE_ENV || "development"];
const envConfig = require(`./webpack/webpack.${env}.config.js`);
module.exports = webpackMerge(baseConfig, envConfig);
