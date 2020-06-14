const plugin = require('./plugin');
const path = require('./path');

module.exports = {
  mode: 'production',

  // devtool: 'cheap-module-source-map', 
  // devtool: 'none', 

  entry: {
    app: ['./index.tsx']
  },

  output: {
    path: path.outputPath,
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js'
  },

  optimization: {
    runtimeChunk: {
      name: entrypoint => `manifest~${entrypoint.name}`
    },
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [plugin.terserPlugin, plugin.copyPlugin, plugin.optimizeCSSAssetsPlugin, plugin.miniCssExtractPlugin]
};
