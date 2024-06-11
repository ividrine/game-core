import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  browser: {
    minimize: () => {
      console.log("Minimizing");
      ipcRenderer.send("window_minimize");
    },
    maximize: () => ipcRenderer.send("window_maximize"),
    close: () => ipcRenderer.send("window_close"),
  },
});
