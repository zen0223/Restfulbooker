const { test, expect } = require("@playwright/test");
test.beforeEach(async ({ page }) => {
  await page.goto("https://automationintesting.online/");
});
test("Browser context", async ({ browser }) => {
  //chrome -plugins /cookies will be present in a browser already
  const context = await browser.newContext();
  const page = await context.newPage();
});
test("Home Page", async ({ page }) => {
  await page.goto("https://automationintesting.online/");
  await page.title();
  console.log(await page.title());
  await expect(page).toHaveTitle("Restful-booker-platform demo");
});
test("Book this room", async ({ page }) => {
  //Test Book this room & Cancel buttons behavior
  await page.locator('button:has-text("Book this room")').click();
  await page.locator('button:has-text("Book")').click();
  //required fields error message
  await page.getByText("size must be between 3 and 30").isVisible();
  await page.locator('button:has-text("Cancel")').click();
  const locator = page.locator("row hotel-room-info");
  await expect(locator).toBeHidden();
  await page.locator('button:has-text("Book this room")').click();
  await page.locator('button:has-text("Today")').click();
  await page.locator('button:has-text("Back")').click();
  await page.locator('button:has-text("Next")').click();
  await navigateToNextMonth(page, "February", 2024);
  //User selecting dates on the calendar
  const source = page.locator('button:has-text("11")');
  const target = page.locator('button:has-text("17")');
  await source.dragTo(target);
  //User fills out manadatory form
  await page.getByPlaceholder("Firstname").fill("John");
  await page.getByPlaceholder("Lastname").fill("Doe");
  await page.locator('input[name="email"]').fill("johndoe@testing.com");
  await page.locator('input[name="phone"]').fill("00000000000");
  await page.locator('button:has-text("Book")').click();
  //Booking Success popup
  await page.locator('#h3:has-text("Booking Successful!")').isVisible();
});

async function navigateToNextMonth(page) {
  const nextButton = 'button:has-text("Next")';
  await page.click(nextButton);
}
