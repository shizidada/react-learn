const { override, useBabelRc, useEslintRc, fixBabelImports, addLessLoader } = require('customize-cra');

const dropConsole = () => {
  return (config) => {
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions.compress.drop_console = true
        }
      })
    }
    return config;
  }
}

module.exports = override(
  useBabelRc(),

  useEslintRc(),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),

  dropConsole(),
);
