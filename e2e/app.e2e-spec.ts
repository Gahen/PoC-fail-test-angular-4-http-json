import { LpmPage } from './app.po';

describe('lpm App', () => {
  let page: LpmPage;

  beforeEach(() => {
    page = new LpmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
