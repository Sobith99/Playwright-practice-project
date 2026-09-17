import test,{expect} from "@playwright/test";

test("locator",async ({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
const firstName=page.locator("#validationCustom01")
await firstName.fill("abc")
//await page.pause()
const lastName=page.locator(".form-control").nth(1)
await lastName.fill("test")
//await page.pause()

const userName=page.locator('input[placeholder="Username"]')
await userName.fill("testdemo")
//await page.pause()

const city=page.locator('//input[@id="validationCustom03"]')
await city.fill("Kochi")
//await page.pause()

const state=page.getByPlaceholder("State")
await state.fill("Kerala")

const checkBox=page.getByLabel('Agree to terms and conditions')
await checkBox.click()

const zip=page.locator('//input[@id="validationCustom05"]')
await zip.fill("683518")

const button=page.getByRole('button',{name:"Submit form"})
await button.click()

const successMessage=page.locator('//div[@id="message-one"]')

await expect(successMessage).toBeVisible()
const booleanVal=await successMessage.isVisible()
console.log(booleanVal)
await expect(booleanVal).toBeTruthy()
const messageText=await successMessage.textContent()
console.log(messageText)

await expect(messageText).toContain("successfully")




})