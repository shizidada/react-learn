const path = require("path");
const loader = require("./loaders");
const plugin = require("./plugins");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  module: {
    rules: [loader.babelLoader]
  },

  plugins: [plugin.htmlWebpackPlugin, plugin.happyPack],

  resolve: {
    alias: {
      config: resolve("config"),
      "@assets": resolve("src/assets")
    },
    modules: [resolve("scr"), "node_modules"],
    extensions: [".js", ".jsx", ".json"]
  }
};
