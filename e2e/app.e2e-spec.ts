import { FormarrayRecursionPage } from './app.po';

describe('formarray-recursion App', () => {
  let page: FormarrayRecursionPage;

  beforeEach(() => {
    page = new FormarrayRecursionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
