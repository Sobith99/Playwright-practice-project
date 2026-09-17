import test,{expect} from "@playwright/test";
test("JavascriptAlert",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const alertandModels=page.getByRole('link',{name:"Alerts and Modals"})
    await alertandModels.click()
    const JavascriptAlertTest=page.getByRole('link',{name:"Javascript Alert"})
    await JavascriptAlertTest.click()
    const ClickMe=page.locator("button[class='btn btn-warning']")
    page.on('dialog',async(dialog)=>{
        await page.waitForTimeout(5000)
       // await dialog.accept()
       await dialog.dismiss()
    })
    await ClickMe.click()
    /*const ShowselectedValueMsg=await page.locator('//div[@id="confirm-demo"]')
    const ShowselectedValueMsg=await ShowselectedValue.textContent()
    await expect(ShowselectedValue).toContain("Cancel")*/
    test.only("JavascriptAlert",async({page})=>{
        await page.goto("https://selenium.qabible.in/index.php")
        
    const alertandModels=page.getByRole('link',{name:"Alerts and Modals"})
    await alertandModels.click()
    })
    const promptText=await page.locator('.btn.btn-danger')
    page.on('dialog',async(dialog)=>{
        await page.waitForTimeout(5000)
       // await dialog.accept()
       //await dialog.dismiss()
       console.log(dialog.message)
       await dialog.accept()
    })

    await promptText.click()

    
    await page.pause()

})