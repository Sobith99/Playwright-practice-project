import { Locator, Page } from "@playwright/test"

export class ProductPage{
    page:Page
    itemlocator:Locator
    shoppingcartLink:Locator
    inventorydescription:Locator

    constructor(page:Page){
      this.page=page  
      this.itemlocator=page.locator('.inventory_item_name')
      this.shoppingcartLink=page.locator('.shopping_cart_link')
      this.inventorydescription=page.locator('.inventory_item_description')
      

    }
    async  selectProduct(myProduct:any){
      const allProducts=await this.itemlocator.allTextContents()
      const productCount=await this.itemlocator.count()
      for(let i=0;i<productCount;i++){
        if(await this.inventorydescription.nth(i).locator('.inventory_item_name').textContent()==myProduct){
            const cartButton=this.inventorydescription.nth(i).getByText('Add to cart')
            await cartButton.click()
            
        }
    }
}
    async navigateShoppingCart(){
    await this.shoppingcartLink.click()
}
}