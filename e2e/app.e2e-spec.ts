import { Page } from './app.po';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    //beforeEach(() => page.navigateTo('/'));

    it('should have a title saying Home', () => {
      page.getTitle().then(title => {
        expect(title).toEqual('Ionic');
      });
    });

    it('should present the package name', () => {
      page.find('#pkgname').getText().then(text => {
        expect(text).toEqual('io.ionic.seed');
      });
    });
  })
});
