const {app, BrowserWindow} = require('electron')

const electron = require('electron')
/*获取electron窗体的菜单栏*/ 
const Menu = electron.Menu /*隐藏electron创听的菜单栏*/ 
Menu.setApplicationMenu(null)

let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow () {
mainWindow = new BrowserWindow({
width: 1400,
height: 865,
webPreferences: {
// node集成，即是否注入node能力
nodeIntegration: true
}
})

// 加载主页面内容 index.html
mainWindow.loadURL('https://bbs.kimidayo.cn')

mainWindow.on('closed', function () {
mainWindow = null
})
}

app.on('ready', createWindow)