import test,{expect} from "@playwright/test";
test('DragandDrop',async({page})=>{
    await page.goto("https://selenium.qabible.in/index.php")
    const OthersPage=page.getByRole('link',{name:"Others"})
    await OthersPage.click()
    const DragandDropPage=page.getByRole('link',{name:"Drag and Drop"})
    await DragandDropPage.click()
    //const draggable=page.getByText("Draggable n°1")
    const allsources=await page.locator('#todrag span[draggable="true"]')

    const mydropzone=page.locator('#mydropzone')
    const count=await allsources.count()
    console.log(count)
    //const span2=allsources[1]
    //console.log(await span2.isVisible())
    //await draggable.dragTo(mydropzone)
    for(let i=0;i<count;i++){
        await allsources.first().dragTo(mydropzone)
        await page.waitForTimeout(3000)
    }




})

//normal click- locator.click()
//double click- locator.dblclick()
//triple click- locator.click({clickCount:3})
//right click- locator.click({button:"right"})

//task-practice in checkbox

//hover- locator.hover()

