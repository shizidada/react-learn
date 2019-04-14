const plugins = require("./webpack.plugins");
const path = require("path");

module.exports = {
  entry: {
    vendor: [
      "lodash",
      "react",
      "react-dom",
      "prop-types"
      // 'dva',
      // 'reselect',
      // 'axios',
    ]
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    publicPath: "/assets/",
    filename: "[name].js",
    library: "[name]"
  },
  // module: {
  //   rules: [
  //     Rule.JSX
  //   ]
  // },
  plugins: [
    // plugins.prodDefination,
    plugins.dll,
    plugins.uglify,
    plugins.progress(),
    plugins.stats
  ]
};
