import { chromium, test } from "@playwright/test";
test("Create Individuals", async ({ page }) => {

    await page.goto("https://login.salesforce.com");
    // Loginto the Application
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("#Login").click();

    //Click on the App Launcher button
    await page.locator("//button[@title='App Launcher']").click();
    await page.locator("//*[@aria-label='View All Applications']").click();

    //Click on the Indiviuals link
    await page.locator("//*[text()='Inventory Item Reservations']/preceding::a[1]").click();


    await page.waitForTimeout(3000)
    //click on the serach field and enter last name and search
    await page.locator("//*[@name='Individual-search-input']").fill("Estéves");
    await page.keyboard.press('Enter');
    await page.locator("(//*[contains(@class,'rowActionsPlaceHolder ')])[1]").click();
    await page.locator("//a[@title='Edit']").click();

    // Click on the salutation button and select values
    await page.locator("(//*[@class='select'])[1]").click();
    await page.locator("//*[text()='Mr.']").click();

    await page.locator("//*[@placeholder='First Name']").clear();
    await page.locator("//*[@placeholder='First Name']").fill("jenkinserss");
    await page.locator("//*[@title='Save']").click();
    await page.waitForTimeout(3000)

    //locate the element with text and check the lead Name is created
    const element = await page.locator("//a[contains(text(),'jenkinserss ')]").isVisible ? true : false;
    console.log(element);




})
