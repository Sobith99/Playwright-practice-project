import test,{expect} from "@playwright/test"
test("calendar",async({page})=>{
await page.goto("https://selenium.qabible.in/index.php")
const datepickerPage=page.getByRole('link',{name:"Date Pickers"})
await datepickerPage.click()
const dateInputText=page.locator(".form-control.datepicker")
await dateInputText.click()
await page.locator('.datepicker-days th.datepicker-switch').click()
await page.locator('.datepicker-months th.datepicker-switch').click()
const targetYear=2027
const targetMonth=11
const targetDate=22
while(true){
const yearRange=await page.locator('.datepicker-years th.datepicker-switch').textContent()
console.log(yearRange)

const startYear= await yearRange.split('-')[0]
const endYear= await yearRange.split('-')[1]
console.log(startYear)
console.log(endYear)
if(targetYear>=startYear && targetYear<=endYear){
    break
}
if(targetYear<startYear){
 await page.locator('.datepicker-years th.prev').click()
}
else{
 await page.locator('.datepicker-years th.next').click()   
}

}
await page.getByText(targetYear.toString(),{exact:true}).click()
//await page.locator('span').filter({hasText:new RegExp('^${targetYear}$')}).first().click()
await page.locator('.month').nth(targetMonth-1).click()
await page.getByText(targetDate.toString(),{exact:true}).click()

const showDateButton=page.locator('#button-one')
await showDateButton.click()

const showDateText=await page.locator('#message-one').textContent()
console.log(showDateText)
await expect(showDateText).toContain("Date :")

//await page.locator('span.year',{hasText:"1999"}).click()
//await page.pause()

})