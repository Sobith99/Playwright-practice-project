import test,{expect} from "@playwright/test";
import {customTest} from "../utils/customData.js"
import {myTest} from "../utils/sampleCustom.js"
import {locatorCustom} from "../utils/baseTest.js"
test.skip("DemoProject",async({page})=>{
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('#password')
    await password.fill('secret_sauce')
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    const allProducts=await page.locator('.inventory_item_name').allTextContents()
    console.log(allProducts)
    const productCount=await page.locator('.inventory_item_name').count()
    console.log(productCount)
    const myProduct='Sauce Labs Bike Light'
    for(let i=0;i<productCount;i++){
        if(await page.locator('.inventory_item_description').nth(i).locator('.inventory_item_name').textContent()==myProduct){
            const cartButton=page.locator('.inventory_item_description').nth(i).getByText('Add to cart')
            await cartButton.click()
            
        }
    }
    const shoppingcartLink=page.locator('.shopping_cart_link')
    await shoppingcartLink.click()
    const shoppingCartProduct=await page.locator('.inventory_item_name').textContent()
    await expect(myProduct).toBe(shoppingCartProduct)
    const checkoutButton=page.locator('#checkout')
    await checkoutButton.click()
    const firstName=page.locator('#first-name')
    await firstName.fill('abc')
    const lastName=page.locator('#last-name')
    await lastName.fill('def')
    const zipCode=page.locator('#postal-code')
    await zipCode.fill('683518')
    const continueButton=page.locator('#continue')
    await continueButton.click()
    const finishButton=page.locator('#finish')
    await finishButton.click()
    const tankyouMessage=await page.locator('h2.complete-header').textContent()
    await expect(tankyouMessage).toBe('Thank you for your order!')
    const backhomeButton=page.locator('#back-to-products')
    await backhomeButton.click()


})
const users=["loginData","loginData2"]

customTest.skip("sample custom test", async({page,loginData})=>{
    for(let user of users){
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill(user.username)
    const password=page.locator('#password')
    await password.fill(user.password)
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    }
})
myTest.skip("my Test", async({page,userDetail})=>{

    for(const user of userDetail){
    await page.goto('https://www.saucedemo.com')
    const username=page.locator('#user-name')
    await username.fill(user.username)
    const password=page.locator('#password')
    await password.fill(user.password)
    const loginButton=page.locator('#login-button')
    await loginButton.click()
    }
})

locatorCustom("base test",async({page,loginFunction})=>{
    await loginFunction("standard_user","secret_sauce")


    
})
