import test from "@playwright/test";

test.describe('GroupingTestCase', ()=>{
    

test.beforeEach('beforeEachHook',async ({page})=>{
    console.log("Run before each test")
})
test('normalTestCase',async ({page})=>{
    console.log('Normal test')
})
test.skip('SkipTestCase',async ({page})=>{
    console.log('Skip test')
})
test.fixme('FixmeTestCase',async ({page})=>{
    console.log('Fixme test')
})
test('slowTestCase',async ({page})=>{
    test.slow()
    console.log('slow test')
})
test.afterEach('afterEachTestCase',async ({page})=>{
    
    console.log('aftereach test')
})
test.afterAll('afterAllTestCase',async ({browser})=>{
    
    console.log('afterAll test')
})
test.beforeAll('beforeAllTestCase',async ({browser})=>{
    
    console.log('beforeAll test')
})
})
