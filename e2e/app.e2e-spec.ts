import { Angular4ProjectPage } from './app.po';

describe('angular4-project App', () => {
  let page: Angular4ProjectPage;

  beforeEach(() => {
    page = new Angular4ProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
