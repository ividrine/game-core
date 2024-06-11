import { IpcMainEvent } from "electron";
const share: any = (global as any).share;

const GameService = () => {
  share.ipcMain.on("sync_games", (event: IpcMainEvent, args: any) => {
    // Do work

    event?.sender?.send("sync_games", {});
  });
};

export default GameService;
