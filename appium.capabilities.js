/*
  * Some capabilities must be set to make sure appium can connect to your device.
  * browserName: leave this empty, we want protractor to use the embedded webview
  * autoWebView: true for hybrid applications
  * platformName: device platform name (eg. 'android')
  * platformVersion: version of the android on the device (eg. '7.0')
  * deviceName: for android, it can be the adb device address (eg. 'ce031713733918ed0c')
  * app: the location of the apk (must be absolute)
  */
module.exports = {
    browserName: '',
    autoWebview: true,
    platformName: 'android',
    platformVersion: '7.0',
    deviceName: 'ce031713733918ed0c',
    app: ''
};
