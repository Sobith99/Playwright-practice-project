export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginButton=page.locator('#login-button')

    }
   async  gotoPage(){
    await this.page.goto('https://www.saucedemo.com')
    }
   async  validateUser(){
    await this.username.fill('standard_user')
    await this.password.fill('secret_sauce')
    await this.loginButton.click()
}
}