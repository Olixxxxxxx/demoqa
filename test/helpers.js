import { browser, have, be } from "selenidejs";
export class Helpers {
  static closeBanners() {
    browser.executeScript(`
    document.querySelectorAll(
      '.Google-Ad, iframe[id^="google_ads_iframe_"], div[id^="Ad.Plus-"]').forEach(el => el.remove());
  `)
  }
  static dataAssertion(rowNumber, fieldName, Data) {
    browser
      .element(`table tbody tr:nth-child(${rowNumber}) td:nth-child(1)`)
      .should(have.text(fieldName))
    browser
      .element(`table tbody tr:nth-child(${rowNumber}) td:nth-child(2)`)
      .should(have.text(Data))
  }
}
