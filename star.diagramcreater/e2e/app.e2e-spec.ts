import { Star.DiagramcreaterPage } from './app.po';

describe('star.diagramcreater App', () => {
  let page: Star.DiagramcreaterPage;

  beforeEach(() => {
    page = new Star.DiagramcreaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
