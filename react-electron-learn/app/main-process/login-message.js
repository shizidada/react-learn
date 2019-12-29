const { ipcMain } = require('electron')

ipcMain.on("mosoe-auth-fail", (event, data) => {
  console.log("moose-auth-fail :: ", (event, data));
  // mainWindow.setSize(400, 200);
  // mainWindow.setPosition(500, 200);
  // mainWindow.setFullScreen(true)
  // mainWindow.setResizable(false);
  // mainWindow.setMenu(null);
  // mainWindow.setTitle(null);
});