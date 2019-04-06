const commonConfig = require('./webpack.config');
const plugins = require('./plugins');

module.exports = Object.assign({}, commonConfig, {
    plugins: [
        plugins.prodDefination,
        plugins.cleanBundle,
        plugins.occurenceOrder,
        plugins.extractLess,
        plugins.uglify,
        plugins.progress(),
        plugins.stats
    ]
});
