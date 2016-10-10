import { browser, element, by } from 'protractor';
declare var describe, beforeEach, it, expect;

describe('HomePage', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have {nav}', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar ion-title')).getText()).toContain('Ionic seed');
  });

  it('has a menu button that displays the left menu', () => {
    element(by.css('ion-navbar:first-child')).click()
      .then(() => {
        browser.driver.sleep(2000); // wait for the animation
        expect(element.all(by.css('.toolbar-title')).first().getText()).toEqual('Menu');
      });
  });
});