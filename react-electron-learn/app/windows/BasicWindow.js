const { BrowserWindow } = require("electron");
const { basicConfig } = require("../config/widnow.config");

class BasicWindow extends BrowserWindow {
  constructor(config, urlLocation) {
    // compose cinfig
    const finalConfig = { ...basicConfig, ...config };

    super(finalConfig);

    // load url
    this.loadURL(urlLocation);

    this.once("ready-to-show", () => {
      this.show();
    });
  }
}

module.exports = BasicWindow;
