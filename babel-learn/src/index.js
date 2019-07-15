const babel = require("@babel/core");

const test = () => {};

babel.transform(test, {}, function(err, result) {
  // console.log("err :: ", err)
  console.log(JSON.stringify(result));
});
