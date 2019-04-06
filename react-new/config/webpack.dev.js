const commonConfig = require('./webpack.config');
const plugins = require('./webpack.plugins');
const devServer = require('./webpack.server');

module.exports = Object.assign(commonConfig, {

    devtool: 'cheap-module-eval-source-map',

    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${devServer.url}`,
        'webpack/hot/only-dev-server',
        './index.js',
    ],

    devServer: devServer.init(),

    plugins: [
        // plugins.dllRefer,
        ...(commonConfig.plugins || []),
        plugins.progress(),
        plugins.openBrowser({ url: devServer.url })
    ]
});
