import { Locator, Page } from "@playwright/test"

export class OverviewPage{
    page:Page
    finishButton:Locator
    
    constructor(page:Page){
        this.page=page
        this.finishButton=page.locator('#finish')
    }
    async clickFinish(){
        await this.finishButton.click()
    }
}