import { CartPage } from "./CartPage";
import { CompletePage } from "./CompletePage";
import { InformationPage } from "./InformationPage";
import { LoginPage } from "./LoginPage";
import { OverviewPage } from "./OverviewPage";
import { ProductPage } from "./ProductPage";

export class PomManager{
    constructor(page){
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