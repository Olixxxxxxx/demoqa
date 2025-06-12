import "chromedriver";
import { browser, be} from "selenidejs"
import { Helpers } from "./helpers"

let URL = `https://demoqa.com/automation-practice-form`

describe("Practice Form Test", function () {
  beforeEach(async () => {
    await browser.open(`${URL}`)
    await browser.driver.manage().window().setRect({ width: 1800, height: 1280 })
    Helpers.closeBanners()
    browser.config.timeout = 10000
    console.log("Start testing")
  })

  afterAll(async () => {
    //await browser.quit()
    console.log("End testing")
  })

  it("E2E Practice Form Test)", async () => {
    await browser.element("#firstName").setValue("Olha")
    await browser.element("#lastName").setValue("Kolmakova")
    await browser.element("#userEmail").setValue("olha@gmail.com")
    await browser.element('label[for="gender-radio-1"]').click()
    await browser.element("#userNumber").setValue("3877777777")
    await Helpers.setDateOfBirth(19,8,1989)
    await browser.element("#subjectsInput").click()
    await browser.element('#subjectsInput').type('e')
    await browser.element('.subjects-auto-complete__menu-list').should(be.visible)
    await browser.element('.subjects-auto-complete__menu-list > *', el => el.getText() === 'English').click()
    await browser.element('label[for="hobbies-checkbox-2"]').click()
    await browser.element('#uploadPicture').setValue(require('path').resolve('files/picture.jpg'))
    await browser.element('#currentAddress').setValue('Wroclaw') 
    await browser.element('#state').click()
    await browser.element('#react-select-3-input').type('ha')
    await browser.element('.css-11unzgr').should(be.visible)
    await browser.element('.css-11unzgr > *', el => el.getText() === 'Haryana').click()
    await browser.element('#react-select-4-input').type('ka')
    await browser.element('.css-11unzgr').should(be.visible)
    await browser.element('.css-11unzgr > *', el => el.getText() === 'Karnal').click()
    await browser.element('#submit').click()
    await browser.element('.table-responsive').should(be.visible)
    Helpers.dataAssertion(1,'Student Name','Olha Kolmakova')
    Helpers.dataAssertion(2,'Student Email','olha@gmail.com')
    Helpers.dataAssertion(3,'Gender','Male')
    Helpers.dataAssertion(4,'Mobile','3877777777')
    Helpers.dataAssertion(5,'Date of Birth','19 August,1989')
    Helpers.dataAssertion(6,'Subjects','English')
    Helpers.dataAssertion(7,'Hobbies','Reading')
    Helpers.dataAssertion(8,'Picture','picture.jpg')
    Helpers.dataAssertion(9,'Address','Wroclaw')
    Helpers.dataAssertion(10,'State and City','Haryana Karnal')
  })
})
