import { chromium, test } from "@playwright/test";

test("Create Lead and validate", async ({ page }) => {

    await page.goto("https://login.salesforce.com")
    // Loginto the Application
    await page.locator("#username").fill("vidyar@testleaf.com");
    await page.locator("#password").fill("Sales@123");
    await page.locator("#Login").click();

    //Click on the App Launcher button
    await page.locator("//button[@title='App Launcher']").click();
    await page.locator("(//button[@class='slds-button'])[2]").click();

    //Click on the Sales Link
    await page.locator("//p[contains(@title,'Manage your sales')]/preceding-sibling::a").click();

    // click on the leads dropdown
    await page.locator("//*[text()='Leads List']/parent::a").click();

    // Click on the New Lead link
    await page.locator("//*[@aria-label ='Recent records']/preceding::a[1]").click();

    console.log(`Title of the page is  : ${await page.title()}`);

    // Click on the salutation button and select values
    await page.locator("//*[@name='salutation']").click();

    await page.locator("//*[text()='Mrs.']").click();

    // Enter Last Name & Company and click Save button
    await page.locator("//*[@name='lastName']").fill("jenkinser");

    await page.locator("//*[@name='Company']").fill("Testleaf");

    await page.locator("//*[@name='SaveEdit']").click();

    console.log(`Title of the page is  : ${await page.title()}`);

    //Wait for 3seconds
    await page.waitForTimeout(3000)

    //locate the element with text and check the lead Name is created
    const element = await page.locator("//*[text()='Mrs.  jenkinser']").isVisible ? true : false;
    console.log(element);


})

