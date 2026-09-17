export class InformationPage{
    constructor(page){
        this.page=page
        this.firstName=page.locator('#first-name')
        this.lastName=page.locator('#last-name')
        this.zipCode=page.locator('#postal-code')
        this.continueButton=page.locator('#continue')
    }
    async informationofUser(){
        await this.firstName.fill('abc')
        await this.lastName.fill('def')
        await this.zipCode.fill('683518')

    }
    async clickContinue(){
        await this.continueButton.click()
    }
}