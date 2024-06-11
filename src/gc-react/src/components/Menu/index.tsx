import "./index.css";

export interface IElectronAPI {
  browser: {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
  };
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}

const Menu = () => {
  return (
    <div className="flex bg-primary text-light shadow text-xs">
      <div className="flex grow menu-drag">
        <span className="uppercase font-bold pt-[0.5em] px-2 text-[0.7rem]">
          Game Core
        </span>
      </div>
      <div className="flex shrink items-center text-center justify-center menu-no-drag">
        <button
          onClick={window?.electron?.browser?.minimize}
          className="px-2 py-1 hover:bg-secondary hover:text-white"
        >
          <span>
            <i className="fa-solid fa-window-minimize align-[0.4em]"></i>
          </span>
        </button>
        <button
          onClick={window?.electron?.browser?.maximize}
          className="px-2 py-1 hover:bg-secondary hover:text-white"
        >
          <span>
            <i className="fa-regular fa-square"></i>
          </span>
        </button>
        <button
          onClick={window?.electron?.browser?.close}
          className="px-2 py-1 hover:bg-red-600 hover:text-white"
        >
          <span>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
