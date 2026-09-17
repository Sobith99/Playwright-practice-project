import test from "@playwright/test";

test("demo test",async ({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.amazon.in/")
//await page.pause()
})

test.skip("demo test2",async ({page})=>{
await page.goto("https://www.google.com")
//await page.pause()
})