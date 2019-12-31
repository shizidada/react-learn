const basicConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true
  },
  show: false,
  backgroundColor: "#efefef",
  frame: false,
  center: true,
};

const loginWindowConfig = {
  width: 300,
  height: 400,
  resizable: false,
  // useContentSize: true,
  // fullscreenable: true,
  // titleBarStyle: "hidden",
  // titleBarStyle: 'hiddenInset',
};

const mainWindowConfig = {
  width: 1200,
  height: 800
};

module.exports = { basicConfig, mainWindowConfig, loginWindowConfig };
