const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Electron App',
    //icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    maxWidth: 1200,
    maxHeight: 900,
    minimizable: true,
    maximizable: true,
    closable: true,
    resizable: true,
    alwaysOnTop: false,
    frame: true,
    disableAutoHideCursor: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      zoomFactor: 1.0,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  }
)