export class OverviewPage{
    constructor(page){
        this.page=page
        this.finishButton=page.locator('#finish')
    }
    async clickFinish(){
        await this.finishButton.click()
    }
}