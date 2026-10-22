'use strict';

const { app, BrowserWindow, shell, session } = require('electron');

const FINGRAM_URL = 'https://aro26pro.pythonanywhere.com/';
const FINGRAM_ORIGIN = new URL(FINGRAM_URL).origin;

function isFingramPage(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    return parsed.protocol === 'https:' && parsed.origin === FINGRAM_ORIGIN;
  } catch {
    return false;
  }
}

function openInBrowser(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol === 'https:' || parsed.protocol === 'mailto:') {
      void shell.openExternal(rawUrl);
    }
  } catch {
    // Ignore malformed links instead of attempting to open them.
  }
}

function createWindow() {
  const win = new BrowserWindow({
    title: 'Fingram',
    width: 1100,
    height: 780,
    minWidth: 360,
    minHeight: 480,
    autoHideMenuBar: true,
    backgroundColor: '#ffffff',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webviewTag: false,
    },
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isFingramPage(url)) {
      void win.loadURL(url);
    } else {
      openInBrowser(url);
    }
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (!isFingramPage(url)) {
      event.preventDefault();
      openInBrowser(url);
    }
  });

  win.webContents.on('will-redirect', (event, url) => {
    if (!isFingramPage(url)) {
      event.preventDefault();
      openInBrowser(url);
    }
  });

  void win.loadURL(FINGRAM_URL);
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback, details) => {
    const page = details.requestingUrl || webContents.getURL();
    const allowed = isFingramPage(page) && (permission === 'media' || permission === 'notifications');
    callback(allowed);
  });

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
