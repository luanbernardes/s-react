import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Visit the home page before each test
    await page.goto('http://localhost:5173');
  });

  test('Main experience', async ({ page }) => {
    // loading correct results
    await page.waitForSelector('button:has-text("Darth Vader")');
    await page.waitForSelector('button:has-text("Obi-Wan Kenobi")');

    // show results of characters
    const button = page.locator('button', { hasText: 'Luke Skywalker' });
    const buttonExists = (await button.count()) > 0;
    expect(buttonExists).toBeTruthy();

    // show details in modal
    await button.click();
    const modalText = [
      'Details',
      'Height: 1.72m',
      'Gender: male',
      'Name: Tatooine',
      'Population: 200000'
    ];

    for (const text of modalText) {
      await page.locator(`text=${text}`).waitFor();
    }

    // click out modal to close and check if closed
    await page.locator('body').click({ position: { x: 10, y: 10 } });
    await expect(page.locator('div.MuiDialog-container')).toBeHidden();
    await expect(page.locator('text=Height: 172m')).toBeHidden();

    // change pagination
    await page.click('button[aria-label="Go to page 9"]');
    await page.locator(`text=Tion Medon`).waitFor();

    //
  });
});
