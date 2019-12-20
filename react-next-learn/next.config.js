const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const path = require("path");
// const fs = require("fs");

module.exports = withCss(withLess({
  // less 3.0 
  lessLoaderOptions: {
    javascriptEnabled: true,
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    // console.log(" ############ webpack config ############ ", config.module);

    // fs.writeFile("./default.config.json", JSON.stringify(config), function (err) {
    //     console.log(err);
    // });

    config.module.rules.push({
      test: /\.(png|jpg|gif|ico|jpeg|bmp)$/,
      exclude: path.resolve(__dirname, './node_modules'),
      use: [{ loader: 'url-loader' }]
    })

    // console.log(" ############ webpack buildId ############ ", buildId, dev, isServer, defaultLoaders);

    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    // console.log(" ############ webpackDevMiddleware config ############ ", config);
    return config
  }
}));
