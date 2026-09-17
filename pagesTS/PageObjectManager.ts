import { Page } from "@playwright/test";
import { CartPage } from "../pagesTS/CartPage";
import { CompletePage } from "../pagesTS/CompletePage";
import { InformationPage } from "../pagesTS/InformationPage";
import { LoginPage } from "../pagesTS/LoginPage";
import { OverviewPage } from "../pagesTS/OverviewPage";
import { ProductPage } from "../pagesTS/ProductPage";

export class PomManager{
    loginpage:LoginPage
    productpage:ProductPage
    cartpage:CartPage
    informationpage:InformationPage
    overviewpage:OverviewPage
    completepage:CompletePage

    constructor(page:Page){
        this.loginpage=new LoginPage(page)
        this.productpage=new ProductPage(page)
        this.cartpage=new CartPage(page)
        this.informationpage=new InformationPage(page)
        this.overviewpage=new OverviewPage(page)
        this.completepage=new CompletePage(page)
    }
    getLoginPage(){
        return this.loginpage
    }
    getProductPage(){
        return this.productpage
    }
    getCartPage(){
        return this.cartpage
    }
    getInformationPage(){
        return this.informationpage
    }
    getOverViewPage(){
        return this.overviewpage
    }
    getCompletePage(){
        return this.completepage
    }
}