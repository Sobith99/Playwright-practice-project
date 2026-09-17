import test, { expect } from "@playwright/test"
test("checkbox",async ({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()
const checkboxMenu=page.getByRole('link',{name:"Checkbox Demo"})
await checkboxMenu.click() 
const checkBoxText=page.getByLabel("Click on this check box") 
await checkBoxText.click()
const boolenValue=await checkBoxText.isChecked()
console.log(boolenValue)
//await checkBoxText.uncheck()
await expect(checkBoxText).toBeChecked()
}) 