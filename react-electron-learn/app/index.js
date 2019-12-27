const path = require("path");
const { app, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

const MainAppWindow = require("./windows/BasicWindow");

const { mainWindowConfig } = require("./config/widnow.config");

function createMainWindow() {
  const urlLocation = isDev
    ? "http://localhost:3000/"
    : `file://${path.join(__dirname, "./index.html")}`;

  let mainWindow = new MainAppWindow(mainWindowConfig, urlLocation);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}

let mainWindow = null;
app.on("ready", () => {
  mainWindow = createMainWindow();

  ipcMain.on("auth-fail", (event, data) => {
    console.log("auth-fail :: ", (event, data));

    // mainWindow.setSize(400, 200);
    // mainWindow.setPosition(500, 200);
    // mainWindow.setFullScreen(true)
    // mainWindow.setResizable(false);
    // mainWindow.setMenu(null);
    // mainWindow.setTitle(null);
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createMainWindow();
  }
});
