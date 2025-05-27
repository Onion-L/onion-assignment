import * as React from "react";
import { getCurrentWindow } from "@tauri-apps/api/window";

const appWindow = getCurrentWindow();

const ICONS = {
  minimize: "https://api.iconify.design/mdi:window-minimize.svg",
  maximize: "https://api.iconify.design/mdi:window-maximize.svg",
  restore: "https://api.iconify.design/mdi:window-restore.svg",
  close: "https://api.iconify.design/mdi:close.svg",
};

const CustomTitleBar = () => {
  const [isMaximized, setIsMaximized] = React.useState(false);

  React.useEffect(() => {
    appWindow.isMaximized().then(setIsMaximized);
    const unlisten = appWindow.onResized(async () => {
      setIsMaximized(await appWindow.isMaximized());
    });
    return () => {
      unlisten.then((fn) => fn && fn());
    };
  }, []);

  const handleMinimize = () => appWindow.minimize();
  const handleMaximize = async () => {
    await appWindow.toggleMaximize();
    setIsMaximized(await appWindow.isMaximized());
  };
  const handleClose = () => appWindow.close();

  return (
    <div
      className="fixed w-full -z-10 flex items-center justify-end h-10 px-2 select-none border-b border-gray-200 dark:border-gray-700"
      style={{
        WebkitAppRegion: "drag",
        backgroundColor: "var(--tauri-titlebar-bg, #f8fafc)",
        color: "var(--tauri-titlebar-fg, #1e293b)",
      } as React.CSSProperties}
    >
      <div className="flex gap-1" style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}>
        <button
          aria-label="最小化"
          tabIndex={0}
          onClick={handleMinimize}
          onKeyDown={e => e.key === "Enter" && handleMinimize()}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <img src={ICONS.minimize} alt="minimize" className="w-4 h-4" />
        </button>
        <button
          aria-label={isMaximized ? "还原" : "最大化"}
          tabIndex={0}
          onClick={handleMaximize}
          onKeyDown={e => e.key === "Enter" && handleMaximize()}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <img src={isMaximized ? ICONS.restore : ICONS.maximize} alt={isMaximized ? "restore" : "maximize"} className="w-4 h-4" />
        </button>
        <button
          aria-label="关闭"
          tabIndex={0}
          onClick={handleClose}
          onKeyDown={e => e.key === "Enter" && handleClose()}
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-red-500/80 hover:text-white transition-colors"
        >
          <img src={ICONS.close} alt="close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CustomTitleBar;