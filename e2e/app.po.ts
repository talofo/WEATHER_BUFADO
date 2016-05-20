export class WEATHERBUFADOPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('weather-bufado-app h1')).getText();
  }
}
