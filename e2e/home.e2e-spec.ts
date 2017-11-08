import { browser, element, by } from 'protractor';

describe('Home', () => {

  describe('default screen', () => {

    it('should have a title saying Home', () => {
      browser.getTitle().then(title => {
        expect(title).toEqual('Ionic');
      });
    });

    it('should present the package name', () => {
      element(by.css('#pkgname')).getText().then(text => {
        expect(text).toEqual('io.ionic.seed');
      });
    });
  })
});
