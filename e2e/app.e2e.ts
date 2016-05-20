import { WEATHERBUFADOPage } from './app.po';

describe('weather-bufado App', function() {
  let page: WEATHERBUFADOPage;

  beforeEach(() => {
    page = new WEATHERBUFADOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('weather-bufado works!');
  });
});
