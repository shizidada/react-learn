const { override, useBabelRc, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  useBabelRc(),

  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  })
);
