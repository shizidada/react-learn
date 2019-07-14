module.exports = function(api) {
  api.cache(true);

  // console.log("api : ", api);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
        },
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
  ];
  const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-object-assign",
    "react-hot-loader/babel",

    // Stage 2 https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
    ["@babel/plugin-proposal-decorators", { legacy: true }],

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ];

  return {
    presets,
    plugins,
  };
};
