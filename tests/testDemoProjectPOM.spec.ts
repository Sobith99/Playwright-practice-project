import test,{expect} from "@playwright/test";
import inputData from"../utils/inputData.json"
import { PomManager } from"../pagesTS/PageObjectManager";
//const inputObject=JSON.parse(JSON.stringify(inputData))
//inputData.forEach((inputObject,index)=>{
//let currentDate=new Date().toLocaleString()    
for(let inputObject of inputData){    
test(`DemoProject ${inputObject.myProduct}`,async({page})=>{
    

    let pomObject=new PomManager(page)
    let loginpage=pomObject.getLoginPage()
    await loginpage.gotoPage()
    await loginpage.validateUser(inputObject.username,inputObject.password)

    
    let productpage=pomObject.getProductPage()
    await productpage.selectProduct(inputObject.myProduct)
    await productpage.navigateShoppingCart()

    let cartpage=pomObject.getCartPage()
    await cartpage.verifyProduct(inputObject.myProduct)
    await cartpage.clickCheckout()

    let informationpage=pomObject.getInformationPage()
    await informationpage.informationofUser(inputObject.firstName,inputObject.lastName,inputObject.zipCode)
    await informationpage.clickContinue()

    let overviewpage=pomObject.getOverViewPage()
    await overviewpage.clickFinish()

    let completepage=pomObject.getCompletePage()
    await completepage.verifythankYou()
    await completepage.clickbackhomeButton()




   


   


})
}