# Ionic 3 seed

This is a seed of Ionic 3 with TypeScript + Karma + Protractor + Appium

## Table of Contents
 - [Getting Started](#getting-started)
 - [Run in browser](#run-in-browser)
 - [Run in Android](#run-in-android)
 - [Run in iOS](#run-in-ios)
 - [Run Unit tests](#run-unit-tests)
 - [Run E2E tests](#run-e2e-tests)
 - [Run all tests](#run-all-tests)
 - [Contribute](#contribute)

## Getting Started

* Install Node.js (recommended: use [nvm](https://github.com/creationix/nvm) to install)
* Install the ionic CLI and Cordova CLI (`npm install -g ionic cordova`)
* Clone this repository
* Run `npm install` from the project root
* Use the commands below

## Run in browser
```bash
# only works if no native APIs are being used

npm start         # deploys the the browser
```

## Run in Android
```bash
# make sure the Android device/emulator is connected and available to ADB

npm run android   # deploys the app to an Android device or emulator
```

## Run in iOS
```bash
# make sure the iOS device is connected

npm run ios       # deploys the app to an iOS device or simulator
```

## Run Unit tests
```bash
npm run unittest  # run unit tests on the browser
```

## Run E2E tests
```bash
npm run appium    # run start appium server
npm run e2e       # in other terminal, run the e2e tests on the device
```

## Run all tests
```bash
npm run appium    # run start appium server
npm test          # in other terminal, run the unit tests on the browser and e2e tests on the device
```

## Contribute
Issues and PRs are welcome, see the [issues list](https://github.com/fmsouza/ionic3-seed/issues).
