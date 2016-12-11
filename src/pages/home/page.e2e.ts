import { browser, element, by } from 'protractor';
declare var describe, beforeEach, it, expect;

describe('HomePage', () => {

  beforeEach(() => browser.get(''));

  it('should have {nav}', () => {
    expect(element(by.css('ion-navbar')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for Home', () => {
    expect(element(by.css('ion-navbar ion-title')).getText()).toContain('Ionic');
  });
  
});
