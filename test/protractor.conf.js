const jar = require('selenium-server-standalone-jar');

exports.config = {
  /*
  * normally protractor runs tests on localhost:4444, but we want protractor to connect to appium
  * which runs on localhost:4723
  */
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
  seleniumServerJar: jar.path,

  specs: ['../src/**/*.e2e.ts'],

  capabilities: require('../appium.capabilities'),

  baseUrl: 'http://10.0.2.2:8000',

  beforeLaunch: function() {
    require('ts-node').register({
      project: 'src'
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
