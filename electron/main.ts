import { app, BrowserWindow, ipcMain, Menu, dialog } from "electron";
import * as path from "path";
import * as url from "url";
import * as fs from "fs";
<<<<<<< HEAD
// import { autoUpdater } from "electron-updater";
const { autoUpdater } = require("electron-updater");
=======
import { autoUpdater } from "electron-updater";
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666

let win: BrowserWindow, menu;

app.on("ready", function() {
	createWindow();
   createMenu();
   autoUpdater.checkForUpdatesAndNotify();
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
	createMenu();
  }
});

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  });

  win.loadURL(
    url.format({
<<<<<<< HEAD
      pathname: path.join(__dirname, `/../../dist/electron-updater/index.html`),
=======
      pathname: path.join(__dirname, `/../../dist/electron-starter/index.html`),
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
      protocol: "file:",
      slashes: true
    })
  );

  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

ipcMain.on("getFiles", (event, arg) => {
  const files = fs.readdirSync(__dirname);
  win.webContents.send("getFilesResponse", files);
});


// when the update is ready, notify the BrowserWindow
autoUpdater.on('update-downloaded', (info) => {
   win.webContents.send('updateReady')
});

function createMenu() {
  const template = [];
  // Home Menu
  template.push({
     label: 'Home',
     submenu: [
        { 
			label: 'My Menu',
			click() {
				dialog.showMessageBox({ message: "Is it me?" });
			}
		}
     ]
  });
  // Edit Menu
  template.push({
     label: 'Edit',
     submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
     ]
  });
  // View Menu
  template.push({
     label: 'View',
     submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
     ]
  });
  // Windown menu
  template.push({
     role: 'window',
     submenu: [{ role: 'minimize' }, { role: 'close' }]
  });
  // Help menu
  template.push({
     role: 'help',
     submenu: [
        {
           label: 'Learn More',
           click() {
              require('electron').shell.openExternal('https://electron.atom.io');
           }
        }
     ]
  });

  if (process.platform === 'darwin') {
     template.unshift({
        label: app.getName(),
        submenu: [
           { role: 'about' },
           { type: 'separator' },
           { role: 'services', submenu: [] },
           { type: 'separator' },
           { role: 'hide' },
           { role: 'hideothers' },
           { role: 'unhide' },
           { type: 'separator' },
           { role: 'quit' }
        ]
     });

     // Edit menu
     template[1].submenu.push(
        { type: 'separator' },
        { label: 'Speech', submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }] }
     );

     // Window menu
     template[3].submenu = [{ role: 'close' }, { role: 'minimize' }, { role: 'zoom' }, { type: 'separator' }, { role: 'front' }];
  }

  menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

ipcMain.on("quitAndInstall", (event, arg) => {
   autoUpdater.quitAndInstall();
})