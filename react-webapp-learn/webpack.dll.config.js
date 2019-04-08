var webpack = require('webpack');
var path = require('path');

const config = {
  entry: {
    'utils': ['moment'],
    //'utils': ['pinyin', 'lodash', 'lodash/fp', 'color', 'immutability-helper', 'moment', 'echarts', 'classnames'],
    'react': ['redux', 'react-redux', 'redux-actions', 'redux-saga', 'redux-thunk', 'antd', 'react-bootstrap', 'react-bootstrap-table'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'assets', 'dll'),
    library: '[name]_lib',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'assets', 'dll', '[name]-manifest.json'),
      name: '[name]_lib',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
      exclude: /utils/,
    })
  );
}

module.exports = config;