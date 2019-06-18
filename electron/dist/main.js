"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var fs = require("fs");
<<<<<<< HEAD
// import { autoUpdater } from "electron-updater";
var autoUpdater = require("electron-updater").autoUpdater;
=======
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
var win, menu;
electron_1.app.on("ready", function () {
    createWindow();
    createMenu();
<<<<<<< HEAD
    autoUpdater.checkForUpdatesAndNotify();
=======
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
});
electron_1.app.on("activate", function () {
    if (win === null) {
        createWindow();
        createMenu();
    }
});
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { nodeIntegration: true }
    });
    win.loadURL(url.format({
<<<<<<< HEAD
        pathname: path.join(__dirname, "/../../dist/electron-updater/index.html"),
=======
        pathname: path.join(__dirname, "/../../dist/electron-starter/index.html"),
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
        protocol: "file:",
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on("closed", function () {
        win = null;
    });
}
electron_1.ipcMain.on("getFiles", function (event, arg) {
    var files = fs.readdirSync(__dirname);
    win.webContents.send("getFilesResponse", files);
});
<<<<<<< HEAD
// when the update is ready, notify the BrowserWindow
autoUpdater.on('update-downloaded', function (info) {
    win.webContents.send('updateReady');
});
=======
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
function createMenu() {
    var template = [];
    // Home Menu
    template.push({
        label: 'Home',
        submenu: [
            {
                label: 'My Menu',
                click: function () {
                    electron_1.dialog.showMessageBox({ message: "Is it me?" });
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
                click: function () {
                    require('electron').shell.openExternal('https://electron.atom.io');
                }
            }
        ]
    });
    if (process.platform === 'darwin') {
        template.unshift({
            label: electron_1.app.getName(),
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
        template[1].submenu.push({ type: 'separator' }, { label: 'Speech', submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }] });
        // Window menu
        template[3].submenu = [{ role: 'close' }, { role: 'minimize' }, { role: 'zoom' }, { type: 'separator' }, { role: 'front' }];
    }
    menu = electron_1.Menu.buildFromTemplate(template);
    electron_1.Menu.setApplicationMenu(menu);
}
<<<<<<< HEAD
electron_1.ipcMain.on("quitAndInstall", function (event, arg) {
    autoUpdater.quitAndInstall();
});
=======
>>>>>>> 63402d3b3af05b75b1d330ebbc97a8d637ef6666
//# sourceMappingURL=main.js.map