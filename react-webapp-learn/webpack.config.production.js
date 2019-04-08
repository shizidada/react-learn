var webpack = require('webpack');
var path = require('path');
var baseConfig = require('./webpack.config');

var config = Object.create(baseConfig);
config.plugins = (config.plugins || []).concat([
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('production'),
		},
	}),
	new webpack.optimize.UglifyJsPlugin({
		compressor: {
			screw_ie8: true,
			warnings: false,
			drop_console: true,
		},
		include: path.join(__dirname, 'app/js'),
	}),
]);

module.exports = config;