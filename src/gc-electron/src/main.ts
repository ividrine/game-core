// main.js

// Modules to control application life and create native browser window

import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "path";

const MAIN_ENTRY: string = path.join(
  app.getAppPath(),
  "src",
  "game-core-react",
  "dist",
  "main",
  "index.html"
);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: "Game Core",
    width: 1920,
    height: 1080,
    minWidth: 1000,
    minHeight: 850,
    frame: false,
    icon: path.resolve(app.getAppPath(), "..", "logo.png"),
    show: false,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      preload: path.join(
        app.getAppPath(),
        "src",
        "game-core-electron",
        "dist",
        "preload.js"
      ),
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5000");
  } else {
    mainWindow.loadFile(MAIN_ENTRY);
  }

  // and load the index.html of the app.

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
