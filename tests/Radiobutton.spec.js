import test,{expect} from "@playwright/test";
test("Radiobutton", async({page})=>{
await page.goto("https://selenium.qabible.in/index.php")

const inputForm=page.getByRole('link',{name:"Input Form"})
await inputForm.click()
const RadiobuttonDemo=page.getByRole('link',{name:"Radio Buttons Demo"})
await RadiobuttonDemo.click()
const RadioButtonSelect=page.locator(".form-check-label").nth(0)
await RadioButtonSelect.click()
const button=page.getByRole('button',{name:"Show Selected Value"})
await button.click()
const ShowselectedValue=page.locator('//div[@id="message-one"]')
const ShowselectedValueMsg=await ShowselectedValue.textContent()
console.log(ShowselectedValueMsg)

 
})