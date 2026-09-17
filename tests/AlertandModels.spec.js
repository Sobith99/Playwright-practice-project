import test,{expect} from "@playwright/test";
test("Bootstrap",async ({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const alertandModels=page.getByRole('link',{name:"Alerts and Modals"})
    await alertandModels.click()
    const bootstrapModel=page.getByRole('link',{name:"Bootstrap Modal"})
    await bootstrapModel.click()
    const singleLaunchModel=page.getByRole('button',{name:"Launch Modal"}).nth(0)
    await singleLaunchModel.click()
    const modelWindow=page.locator("document")
    const saveChange=modelWindow.getByRole('button',{name:"Save changes"})
    await saveChange.click()
    const close=modelWindow.locator('//button[@class="btn btn-secondary"]').first()
    await close.click()




})