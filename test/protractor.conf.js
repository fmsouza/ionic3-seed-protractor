exports.config = {
  /*
  * normally protractor runs tests on localhost:4444, but we want protractor to connect to appium
  * which runs on localhost:4723
  */
  seleniumAddress: 'http://localhost:4723/wd/hub',

  //specs: ['../e2e/*.e2e-spec.js'],
  specs: ['../e2e/**/*.e2e-spec.ts'],

  /*
  * Some capabilities must be set to make sure appium can connect to your device.
  * platformVersion: this is the version of android
  * deviceName: your actual device name
  * browserName: leave this empty, we want protractor to use the embedded webview
  * autoWebView: set this to true for hybrid applications
  * app: the location of the apk (must be absolute)
  capabilities: {
    platformName: 'android',
    platformVersion: '7.0',
    deviceName: 'ce031713733918ed0c',
    browserName: '',
    autoWebview: true,
    app: '/Users/clevertech/projects/ionic3-seed/platforms/android/build/outputs/apk/android-debug.apk'
  },
  */
  capabilities: require('../appium.capabilities'),

  baseUrl: 'http://10.0.2.2:8000',

  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },

  /* configuring wd in onPrepare
   * wdBridge helps to bridge wd driver with other selenium clients
   * See https://github.com/sebv/wd-bridge/blob/master/README.md
   */
  onPrepare: function () {
      var wd = require('wd'),
          protractor = require('protractor'),
          wdBridge = require('wd-bridge')(protractor, wd);
      wdBridge.initFromProtractor(exports.config);
  }
};
