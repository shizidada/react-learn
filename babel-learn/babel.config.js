module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,

        targets: {
          chrome: "58",
          ie: "10"
        }
      }
    ]
  ];
  const plugins = ["@babel/plugin-transform-runtime"];

  return {
    presets,
    plugins
  };
};
