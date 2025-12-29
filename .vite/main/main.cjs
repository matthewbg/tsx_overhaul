"use strict";
const electron = require("electron");
const path = require("node:path");
function createWindow() {
  const win = new electron.BrowserWindow({
    width: 1e3,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.cjs"),
      contextIsolation: true
    }
  });
  {
    win.loadURL("http://localhost:5174").catch(console.error);
    win.webContents.openDevTools();
  }
}
electron.app.whenReady().then(createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
});
