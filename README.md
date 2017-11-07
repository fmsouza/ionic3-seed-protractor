# Ionic 3 seed

This is a seed of Ionic 3 with TypeScript + Karma

## Table of Contents
 - [Getting Started](#getting-started)
 - [Run in browser](#run-in-browser)
 - [Run in Android](#run-in-android)
 - [Run in iOS](#run-in-ios)
 - [Run Unit Tests](#run-unit-tests)
 - [Run E2E Tests](#run-e2e-tests)
 - [Contribute](#contribute)

## Getting Started

* Clone this repository.
* Install the ionic CLI and Cordova CLI (`npm install -g ionic cordova`)
* Run `npm install` from the project root.
* Run `npm start` in a terminal from the project root.
* Profit.

## Run in browser
```bash
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

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Run E2E Tests
```bash
npm run appium    # run start appium server
npm run e2e       # in other terminal, run the e2e tests on the device
```

## Contribute
Issues and PRs are welcome, see the [issues list](https://github.com/fmsouza/ionic3-seed/issues).
