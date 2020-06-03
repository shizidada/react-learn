/**
 *
 * @name MyFirstPlugin
 */

const fs = require('fs');

class Plugin {
  apply(compiler) {
    // console.log('MyFirstPlugin :: ', JSON.stringify(this), JSON.stringify(compiler));
    fs.writeFile('./MyFirstPlugin.json', JSON.stringify(compiler), function() {
      
    });
  }
}

module.exports = Plugin;
