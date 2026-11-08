const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 820,
    title: "Lutian Quest",
    backgroundColor: "#0b0910",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  win.on("page-title-updated", e => e.preventDefault());
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
