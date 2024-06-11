const share: any = (global as any).share;

const WindowService = () => {
  share.ipcMain.on("window_minimize", (_: any) => {
    console.log("Minimizing");
    // TODO: this method of finding the main window is definitely broken...
    //      there is no gaurantee that the main window will be first in this array when a second window is open...
    //      this is preventing us from opening the Knowledge Graph in its own window
    const mainWindow = share.BrowserWindow.getAllWindows()[0];
    mainWindow?.minimize();
  });

  share.ipcMain.on("window_maximize", (_: any) => {
    const mainWindow = share.BrowserWindow.getAllWindows()[0];
    if (mainWindow?.isMaximized()) mainWindow.unmaximize();
    else mainWindow?.maximize();
  });

  share.ipcMain.on("window_close", (_: any) => {
    const mainWindow = share.BrowserWindow.getAllWindows()[0];
    mainWindow?.close();
  });
};

export default WindowService;
