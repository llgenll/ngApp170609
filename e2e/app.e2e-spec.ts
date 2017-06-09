import { NgApp170609Page } from './app.po';

describe('ng-app170609 App', function() {
  let page: NgApp170609Page;

  beforeEach(() => {
    page = new NgApp170609Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
