import test,{expect} from "@playwright/test";
test('WindowsPopup', async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const alertandModels=page.getByRole('link',{name:"Alerts and Modals"})
    await alertandModels.click()
    const WindowPopupText=page.getByRole('link',{name:"Window Popup"})
    await WindowPopupText.click()
    const LikeasonFacebook=page.getByRole('link',{name:"Like us On Facebook"})
    console.log(await page.title())
    const [newPage]= await Promise.all([
        page.waitForEvent('popup'),
        LikeasonFacebook.click()
    ])
    await page.waitForLoadState()
    console.log(await newPage.title())
    await newPage.getByLabel('Email address or phone number').fill('abcd')
    await newPage.close()

})