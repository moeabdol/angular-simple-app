import { AngularSimpleAppPage } from './app.po';

describe('angular-simple-app App', () => {
  let page: AngularSimpleAppPage;

  beforeEach(() => {
    page = new AngularSimpleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
