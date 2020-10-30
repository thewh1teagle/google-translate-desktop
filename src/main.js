const electron = require("electron");
const { globalShortcut, TouchBarScrubber, getCurrentWindow } = require('electron')
const electronLocalshortcut = require('electron-localshortcut');

 // import { initSplashScreen, OfficeTemplate } from 'electron-splashscreen';
//import isDev from 'electron-is-dev';
// import { resolve } from 'app-root-path';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require("path");
const fs = require("fs");

// Menu (for standard keyboard shortcuts)
const { Menu } = require("electron");

const template = [
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" },
    ],
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" },
    ],
  },
  {
    role: "window",
    submenu: [{ role: "minimize" }, { role: "close" }],
  },
];

if (process.platform === "darwin") {
  template.unshift({
    label: app.name,
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services", submenu: [] },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" },
    ],
  });

  // Edit menu
  template[1].submenu.push(
    { type: "separator" },
    {
      label: "Speech",
      submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }],
    }
  );

  // Window menu
  template[3].submenu = [
    { role: "close" },
    { role: "minimize" },
    { role: "zoom" },
    { type: "separator" },
    { role: "front" },
  ];
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let initPath;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
  initPath = path.join(app.getPath("userData"), "init.json");

  try {
    data = JSON.parse(fs.readFileSync(initPath, "utf8"));
  } catch (e) {}



  // Fix insecure error when log in google account
  app.userAgentFallback = app.userAgentFallback.replace('Electron/' + process.versions.electron, 'Electron');
  app.userAgentFallback = app.userAgentFallback.replace('Chrome/' + process.versions.chrome, 'Chrome');
  

  
  


  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets/icons/translate.png"),
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: "#fff",
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true,
      webviewTag: true,
      zoomFactor: 1.0,
      enableRemoteModule: true,
    },
    show: false,
    maximize: true,
  });


  


    /*
    electronLocalshortcut.register(mainWindow, 'ESC', () => {
      mainWindow.setFullScreen(false)
    });
    */


  splashWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets/icons/translate.png"),
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: "#fff",
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      zoomFactor: 1.0,
      enableRemoteModule: true,
    },
    show: true,
    fullscreen: true
  })

  


  mainWindow.on("close", () => {
    app.quit()
  })


  // local shortcuts
  
electronLocalshortcut.register(mainWindow, 'Ctrl+Q', () => {
  app.quit()
});

electronLocalshortcut.register(mainWindow, 'F11', () => {
  if (mainWindow.isFullScreen()) {
    mainWindow.setFullScreen(false);
  } else {
    mainWindow.setFullScreen(true);
  }
});




// first load page in background
mainWindow.loadURL("file://" + __dirname + "/views/index.html");


// Custom user agent for google auth
mainWindow.webContents.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:77.0) Gecko/20100101 Firefox/77.0" 
// hide menu bar
mainWindow.on("ready-to-show", () => {
  mainWindow.setMenu(null)
})



// display splash screen
// splashWindow.setMenu(null)
splashWindow.show()
splashWindow.loadURL("file://" + __dirname + "/views/splash.html");


setTimeout(() => {
    mainWindow.show()
    mainWindow.maximize()
    splashWindow.destroy()  
   // mainWindow.maximize()
}, 1500);

  



  // Display Dev Tools
  // mainWindow.openDevTools();

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  data = {
    bounds: mainWindow.getBounds(),
  };
  fs.writeFileSync(initPath, JSON.stringify(data));
  app.quit();
});



