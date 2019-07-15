/* config-overrides.js */
const { override, fixBabelImports } = require("customize-cra");


module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log(config, env)
  return config;
};
