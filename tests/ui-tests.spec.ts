import { test, expect } from '@playwright/test';

test('UI_Test_01 Elements visible', async ({ page }) => {
  await page.setContent(`
    <textarea id="input"></textarea>
    <textarea id="output"></textarea>
  `);

  await expect(page.locator('#input')).toBeVisible();
  await expect(page.locator('#output')).toBeVisible();
});
