//negative scenarios message fetch task
import test,{expect} from "@playwright/test";
test('@Login Correct username with incorrect password', async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('#password')
    await password.fill('incorrect_password')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const errorText=await page.locator("//div[@class='error-message-container error']")
    await expect(errorText).toHaveText('Epic sadface: Username and password do not match any user in this service')
})
test('Username is required',async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const errorText=await page.locator("//div[@class='error-message-container error']")
    await expect(errorText).toHaveText('Epic sadface: Username is required')
})

test('Password is required',async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const errorText=await page.locator("//div[@class='error-message-container error']")
    await expect(errorText).toHaveText('Epic sadface: Password is required')

})

test('Incorrect username with correct password', async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill('incorrect_user')
    const password=page.locator('#password')
    await password.fill('secret_sauce')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const errorText=await page.locator("//div[@class='error-message-container error']")
    await expect(errorText).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

test('Incorrect username with incorrect password', async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill('incorrect_user')
    const password=page.locator('#password')
    await password.fill('abc')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const errorText=await page.locator("//div[@class='error-message-container error']")
    await expect(errorText).toHaveText('Epic sadface: Username and password do not match any user in this service')
})

