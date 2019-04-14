/* eslint object-shorthand: "off" */
const lodash = require("lodash");

const DEFAULT_PORT = 8080;
const DEFAULT_HOST = "localhost";
const env = process.env;
const port = env.DEV_SERVER_PORT || DEFAULT_PORT;
const host = env.DEV_SERVER_HOST || DEFAULT_HOST;

const baseConfig = {
  port,
  host,
  hot: true,
  publicPath: "/assets/",
  historyApiFallback: {
    rewrites: [
      {
        from: /^(?!\/build)/,
        to: "/assets/index.html"
      }
    ]
  }
};

module.exports = {
  init: function() {
    return lodash.assign({}, baseConfig, {});
  },
  port,
  host,
  url: `http://${host}:${port}/`
};
