import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // 👈 All test files are in this folder
  timeout: 30000,
  reporter: [['html', { open: 'always' }]], // Show browser report automatically
  use: {
    headless: false,  // So you can see the browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  // Make sure Playwright runs all *.spec.ts files
  testMatch: '**/*.spec.ts',
});
