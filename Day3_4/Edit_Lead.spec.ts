import { chromium, test } from "@playwright/test"

test("Edit the Lead validation", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("demoSalesManager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    await page.waitForTimeout(3000)

    //Click on the cmrfsa link
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();

    //click on Leads tab
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Leads']").click();

    //Enter Company & first & Last Name
    await page.locator("(//*[@name='companyName'])[1]").fill("Testleaf");
    await page.locator("(//*[@name='firstName'])[2]").fill("Banu");
    await page.locator("(//*[@name='lastName'])[2]").fill("Mohamed")

    //click on the create Lead button
    await page.locator("(//*[text()='Create Lead'])[3]").click();
    await page.locator("//a[text()='Leads']").click();

    //Click on the last page
    await page.locator("//*[@class='x-btn-text x-tbar-page-last']").click();

    //Edit the created Lead, if multiple same record, click the first record
    const name = page.locator("//*[text()='Banu']");
    name.nth(0).click();
    await page.waitForTimeout(3000)
    //Click on the Edit button
    await page.locator("//*[text()='Edit']").click();
    //Edit the company Name clear & update
    await page.locator("(//*[@name='companyName'])[2]").clear();
    await page.locator("(//*[@name='companyName'])[2]").fill("TestGiant");
    await page.locator("//*[@value='Update']").click();
})