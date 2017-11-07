import { browser } from 'protractor';

export class Page {

  constructor() {}

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

}
