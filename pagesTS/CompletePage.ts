import { expect, Locator, Page } from "@playwright/test"
export class CompletePage{
    page:Page
    thankyoumessagepage:Locator
    backhomebutton:Locator

    constructor(page:Page){
        this.page=page
        this.thankyoumessagepage=page.locator('h2.complete-header')
        this.backhomebutton=page.locator('#back-to-products')
    }
    async verifythankYou(){
         const tankyouMessage=await this.thankyoumessagepage.textContent()
         expect(tankyouMessage).toBe('Thank you for your order!')
    }
    async clickbackhomeButton(){
         await this.backhomebutton.click()
    }
}