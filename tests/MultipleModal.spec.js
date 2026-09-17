import test,{expect} from "@playwright/test";
test("BootstrapMultiple",async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const alertandModels=page.getByRole('link',{name:"Alerts and Modals"})
    await alertandModels.click()
    const bootstrapModel=page.getByRole('link',{name:"Bootstrap Modal"})
    await bootstrapModel.click()
    const MultipleLaunchModel=page.getByRole('button',{name:"Launch Modal"}).nth(1)
    await MultipleLaunchModel.click()
    //await page.pause()
    const FirstmodelWindow=page.getByRole("document")
    const LaunchanotherModel=FirstmodelWindow.getByRole('button',{name:"Launch another modal"})
    await LaunchanotherModel.click()
    //await page.pause()
    const SecondModel = page.locator("#exampleModalCenter2");
    const SecondModelTitle = SecondModel.locator('button.btn.btn-primary').last();
    await SecondModelTitle.click();
    const SecondModel = page.locator("#exampleModalCenter2");
    const CloseButton = SecondModel.getByRole("button", {name: "Close"});
    await CloseButton.click();


})