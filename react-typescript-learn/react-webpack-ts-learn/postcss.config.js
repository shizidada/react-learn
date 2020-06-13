module.exports = {
  plugins: [
    //自动添加前缀
    require('autoprefixer'),
    //px转为rem，应用于移动端
    require('postcss-plugins-px2rem')({ remUnit: 75 }),
    //优化合并css
    require('cssnano')
  ]
};
