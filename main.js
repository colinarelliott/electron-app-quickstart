const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false, // set to false to remove the frame
    // Basically add in related back-end scripts here
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //win.loadFile('index.html')
  win.loadURL('https://www.same.energy/')
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