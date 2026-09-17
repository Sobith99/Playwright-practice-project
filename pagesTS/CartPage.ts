import { expect, Locator, Page } from "@playwright/test"
export class CartPage{
    page:Page
    shoppingCartProductPage:Locator
    checkoutButtonClick:Locator
    constructor(page:Page){
        this.page=page
        this.shoppingCartProductPage=page.locator('.inventory_item_name')
        this.checkoutButtonClick=page.locator('#checkout')
    }
    async verifyProduct(myProduct:any){
        const shoppingCartProduct=await this.shoppingCartProductPage.textContent()
        expect(shoppingCartProduct).toBe(myProduct)

    }
    async clickCheckout(){
        await this.checkoutButtonClick.click()
    }
}