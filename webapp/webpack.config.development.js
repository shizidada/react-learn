var baseConfig = require("./webpack.config");
var webpack = require("webpack");

var config = Object.create(baseConfig);
config.plugins = (config.plugins || []).concat([
	new webpack.DefinePlugin({
		"process.env": {
			NODE_ENV: JSON.stringify("development"),
		},
	}),
]);


module.exports = config;