import test,{expect} from "@playwright/test";
test ("selectInput", async({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()
const selectInputMenu=page.getByRole('link',{name:"Select Input"})
await selectInputMenu.click()
const selectColor=page.locator('//select[@id="single-input-field"]')
await selectColor.selectOption("Green")
const selectcolorMsg=page.locator('//div[@id="message-one"]')
const selectColouredMsg=await selectcolorMsg.textContent()
console.log(selectColouredMsg)
await expect(selectcolorMsg).toHaveText(selectColouredMsg)
await expect(selectColouredMsg).toContain("Green")


})