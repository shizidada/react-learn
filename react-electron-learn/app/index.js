const path = require("path");
const glob = require("glob");
const { app, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

const MooseAppWindow = require("./windows/BasicWindow");

const {
  mainWindowConfig,
  loginWindowConfig
} = require("./config/widnow.config");

function loadAllMessagees() {
  const files = glob.sync(path.join(__dirname, "main-process/**/*.js"));
  files.forEach(file => {
    require(file);
  });
}

function initialize() {

  let mainWindow = null;

  function createWindow() {
    const urlLocation = isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./index.html")}`;

    mainWindow = new MooseAppWindow(loginWindowConfig, urlLocation);

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }

  app.on("ready", () => {
    createWindow();

    mainWindow.show();

    loadAllMessagees();

    ipcMain.on("moose-need-login", () => {
      console.log("moose-login-success", mainWindow)
      mainWindow.loadURL("http://localhost:3000/login");
      mainWindow.center();
    });

    ipcMain.on("moose-login-success", () => {
      console.log("moose-login-success", mainWindow)
      mainWindow.loadURL("http://localhost:3000");
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
