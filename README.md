# Google-Translate-Desktop

## Desktop app for google translate


![ezgif-6-d1b19fd03ed6](https://user-images.githubusercontent.com/61390950/97719758-23bc6100-1ad0-11eb-986e-8b012b01f15f.gif)


## Supporting Platforms

- Windows | MacOs | Linux

## Features
- Dark mode!
- Google account sync.



## Requirements
- Nodejs


## Build instruction

First, install electron-packager and required libs
```npm
npm install electron-packager
npm install 
```

Then, build for your platform

### MacOs
```
node_modules/.bin/electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/translate.png --prune=true --out=release-builds
```

### Windows

#### Windows Portable app
```shell
node_modules/.bin/electron-packager . google-translate-desktop --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/translate.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Google translate app"
```

#### Windows Installer
```
npm install electron-installer-windows
node_modules/.bin/electron-packager . app --platform win32 --arch x64 --out dist/
node_modules/.bin/electron-installer-windows --src dist/app-win32-x64/ --dest dist/installers/

```


### Linux
```shell
node_modules/.bin/electron-packager . google-translate-desktop --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/translate.png --prune=true --out=release-builds
```
