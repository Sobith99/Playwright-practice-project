import { Locator, Page } from "@playwright/test"

export class InformationPage{
    page:Page
    firstName:Locator
    lastName:Locator
    zipCode:Locator
    continueButton:Locator
    constructor(page:Page){
        this.page=page
        this.firstName=page.locator('#first-name')
        this.lastName=page.locator('#last-name')
        this.zipCode=page.locator('#postal-code')
        this.continueButton=page.locator('#continue')
    }
    async informationofUser(firstName:string,lastName:string,zipCode:string){
        await this.firstName.fill('abc')
        await this.lastName.fill('def')
        await this.zipCode.fill('683518')

    }
    async clickContinue(){
        await this.continueButton.click()
    }
}