const basicConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true
  },
  show: false,
  backgroundColor: "#efefef"
};

const loginWindowConfig = {
  width: 300,
  height: 400,
  resizable: false,
  useContentSize: true,
  frame: false, // 取消 window 自带的关闭最小化等
  fullScreenable: true,
  center: true,
};

const mainWindowConfig = {
  width: 1024,
  height: 800
};

module.exports = { basicConfig, mainWindowConfig, loginWindowConfig };
