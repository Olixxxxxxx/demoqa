import { browser, have, be } from "selenidejs";
export class Helpers {
  static closeBanners(){
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

  static async setDateOfBirth(day,month,year){
    await browser.element("input#dateOfBirthInput").click()
    await browser.element(".react-datepicker__month-select").click()
    await browser.element(`.react-datepicker__month-select [value="${month-1}"]`).click()
    await browser.element(".react-datepicker__year-select").click()
    await browser.element(`.react-datepicker__year-select [value="${year}"]`).click()
    await browser.element(".react-datepicker__month").click()
    await browser.element(`.react-datepicker__day--0${day}`).click()
  }
}
