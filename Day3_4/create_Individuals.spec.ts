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
    //Crreate New Indiviuals dropdown and then the link
    await page.locator("//*[text()='Recently Viewed']").click();
    await page.locator("//*[text()='Recently Viewed | Individuals']/following::a[@class='slds-button slds-button_reset']").click();
    await page.locator("//*[@class='slds-dropdown__item']/a");

    await page.waitForTimeout(3000)

    await page.locator("//*[@placeholder='Last Name']").fill("Moham");
    await page.locator("//*[@title='Save']");

    const lastname = await page.locator("(//*[text()='Moham'])[2]").isVisible ? true : false
    console.log(lastname);






})
