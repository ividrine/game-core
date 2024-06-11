const share: any = (global as any).share;

const WindowService = () => {
  share.ipcMain.on("window_minimize", (_: any) => {
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
