import test from "@playwright/test";
test("KeyBoardActions",async ({page})=>{
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const enterMessageInput=page.locator("#single-input-field")
    await enterMessageInput.focus()
    await page.keyboard.type("good morning")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    const inputBox=page.locator("#value-a")
    await inputBox.click()
    await page.keyboard.press("Control+V")
    const showMessageButton=page.locator("#button-one")
    await showMessageButton.hover()
    await showMessageButton.click({button:"right"})
    await page.waitForTimeout(3000)
    await showMessageButton.dblclick()
    await showMessageButton.click({clickCount:3})

})