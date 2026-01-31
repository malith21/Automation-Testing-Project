import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../pages/translatorPage';

const inputs = Array.from({ length: 10 }, (_, i) => `@@@invalid###${i}`);

inputs.forEach((text, i) => {
  test(`Neg_Fun_${String(i + 1).padStart(3, '0')}`, async ({ page }) => {
    const t = new TranslatorPage(page);
    await t.goto();
    await t.typeText(text);
    await expect(t.outputBox).toHaveValue(`Translated: ${text}`);
  });
});
