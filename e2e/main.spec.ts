import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Visit the home page before each test
    await page.goto('http://localhost:5173');
  });

  test('should loading character first list and click on "Luke Skywalker" to show a modal with details', async ({
    page
  }) => {
    const inputBase = page.locator('input[placeholder="Search a Star Wars Character"]');
    // loading results
    await page.waitForSelector('button:has-text("Darth Vader")');

    // results
    const button = page.locator('button', { hasText: 'Luke Skywalker' });
    const buttonExists = (await button.count()) > 0;
    expect(buttonExists).toBeTruthy();

    // modal
    await button.click();
    await page.waitForSelector('text=Height: 1.72m');
    await page.waitForSelector('text=Gender: male');
    await page.waitForSelector('text=Name: Tatooine');
    await page.waitForSelector('text=Population: 200000');
  });
});
