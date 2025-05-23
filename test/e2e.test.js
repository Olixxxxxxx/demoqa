import "chromedriver" 
import { browser, command, have, be } from "selenidejs" 

let URL = `https://demoqa.com/automation-practice-form` 

describe("Practice Form Test", function () {
  beforeEach(async () => {
    browser.config.windowHeight = "1080" 
    browser.config.windowWidth = "1920" 
    browser.config.timeout = 10000
    console.log("Start testing")
  })

  afterAll(async () => {
    //await browser.quit()
    console.log("End testing")
  })

  it("E2E Practice Form Test)", async () => {
    await browser.open(`${URL}`)
    await browser.element("#firstName").setValue("Olha")
    await browser.element("#lastName").setValue("Kolmakova")
    await browser.element("#userEmail").setValue("olha@gmail.com")
    await browser.element('label[for="gender-radio-1"]').click()
    await browser.element('#userNumber').setValue("77777777")
    await browser.element("input#dateOfBirthInput").click()
    await browser.element(".react-datepicker__month-select").click()
    await browser.element('.react-datepicker__month-select [value="7"]').click()
    await browser.element('.react-datepicker__year-select').click()
    await browser.element('.react-datepicker__year-select [value="1989"]').click()
    await browser.element('.react-datepicker__month').click()
    await browser.element('.react-datepicker__day--019').click()
    await browser.element('#subjectsInput').click()
    await browser.element('#subjectsInput').type('english')
    await browser.element('#subjectsInput').pressEnter()
    await browser.element('#hobbies-checkbox-2').click()
  })
})



