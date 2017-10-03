import { AngularTablesPage } from './app.po';

describe('angular-tables App', () => {
  let page: AngularTablesPage;

  beforeEach(() => {
    page = new AngularTablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
