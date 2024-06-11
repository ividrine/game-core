import { app, BrowserView, BrowserWindow, ipcMain } from "electron";
import path from "path";

const MAIN_ENTRY: string = path.join(
  app.getAppPath(),
  "src",
  "gc-react",
  "dist",
  "main",
  "index.html"
);

(global as any).share = {
  BrowserView,
  BrowserWindow,
  app,
  ipcMain,
};

require("./app/services");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1500,
    height: 850,
    minWidth: 950,
    minHeight: 500,
    frame: false,
    icon: path.resolve(__dirname, "../../../resources", "logo.png"),
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
