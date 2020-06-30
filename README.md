# Google-Translate-Desktop

## Desktop app for google translate

![tamazight-on-google-1557988729](https://user-images.githubusercontent.com/61390950/86091072-f45efe80-bab3-11ea-8804-23eac263f2d1.jpg)


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
npm install electron-packager -g
npm install 
```

Then, build for your platform

### MacOs
```
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/translate.png --prune=true --out=release-builds
```

### Windows

#### Windows Portable app
```shell
electron-packager . google-translate-desktop --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/translate.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Google translate app"
```

#### Windows Installer
```
npm install -g electron-installer-windows
electron-packager . app --platform win32 --arch x64 --out dist/
electron-installer-windows --src dist/app-win32-x64/ --dest dist/installers/

```


### Linux
```shell
electron-packager . google-translate-desktop --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/translate.png --prune=true --out=release-builds
```
