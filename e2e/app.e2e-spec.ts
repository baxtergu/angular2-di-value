import { Angular2DiValuePage } from './app.po';

describe('angular2-di-value App', () => {
  let page: Angular2DiValuePage;

  beforeEach(() => {
    page = new Angular2DiValuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
