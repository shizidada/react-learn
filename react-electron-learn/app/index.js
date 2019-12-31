const path = require("path");
const glob = require("glob");
const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const Store = require("electron-store");

const {
  basicConfig,
  mainWindowConfig,
  loginWindowConfig
} = require("./config/widnow.config");

const loginStore = new Store({ configName: "Login" });

function loadAllMessagees() {
  const files = glob.sync(path.join(__dirname, "main-process/**/*.js"));
  files.forEach(file => {
    require(file);
  });
}

function buildMenus() {
  // let menu = Menu.buildFromTemplate(menuTemplate);
  // Menu.setApplicationMenu(menu);
}

function initialize() {
  let mainWindow = null;

  function createWindow() {
    const urlLocation = isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./index.html")}`;

    const finalConfig = { ...basicConfig, ...loginWindowConfig };
    mainWindow = new BrowserWindow(finalConfig);
    mainWindow.loadURL(urlLocation);

    mainWindow.once("ready-to-show", () => {
      mainWindow.show();
    });

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }

  app.on("ready", () => {
    createWindow();

    // buildMenus();
    // Menu.setApplicationMenu(null);
    // mainWindow.setMenu(null);

    loadAllMessagees();

    // console.log(app.getPath("userData"))
    console.log(loginStore.delete("isLogin"));
    if (loginStore.get("isLogin")) {
      mainWindow.setResizable(true);
      mainWindow.setSize(mainWindowConfig.width, mainWindowConfig.height);
      mainWindow.center();
    }

    ipcMain.on("moose-login-success", () => {
      mainWindow.setResizable(true);
      // mainWindow.webContents.setLayoutZoomLevelLimits(800, 900);
      mainWindow.setSize(mainWindowConfig.width, mainWindowConfig.height);
      mainWindow.center();
    });
  });

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      mainWindow = createWindow();
    }
  });
}

initialize();
