import { expect } from "@playwright/test"
export class CartPage{
    constructor(page){
        this.page=page
        this.shoppingCartProductPage=page.locator('.inventory_item_name')
        this.checkoutButtonClick=page.locator('#checkout')
    }
    async verifyProduct(myProduct){
        const shoppingCartProduct=await this.shoppingCartProductPage.textContent()
        expect(shoppingCartProduct).toBe(myProduct)

    }
    async clickCheckout(){
        await this.checkoutButtonClick.click()
    }
}