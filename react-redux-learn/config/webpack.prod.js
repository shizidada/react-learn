const commonConfig = require('./webpack.config');
const plugins = require('./webpack.plugins');

module.exports = Object.assign({}, commonConfig, {
    plugins: [
        plugins.prodDefination,
        plugins.cleanBundle,
        plugins.occurenceOrder,
        plugins.extractLess,
        plugins.uglify,
        // plugins.html,
        // plugins.addAssetHtml,
        plugins.progress(),
        plugins.stats
    ]
});
