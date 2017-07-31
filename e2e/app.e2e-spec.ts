import { ReceipesAppPage } from './app.po';

describe('receipes-app App', () => {
  let page: ReceipesAppPage;

  beforeEach(() => {
    page = new ReceipesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
