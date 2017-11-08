import { browser, element, by } from 'protractor';

export class Page {

  constructor() {}

  navigateTo(destination: string) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  find(query: string) {
    return element(by.css(query));
  }

}
