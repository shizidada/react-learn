const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  NODE_ENV,

  dev: {
    mode: NODE_ENV,
    devtool: "cheap-module-eval-source-map" // cheap-module-eval-source-map
  },

  prod: {
    mode: NODE_ENV
  }
};
