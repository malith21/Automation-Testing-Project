import { Page, Locator } from '@playwright/test';

export class TranslatorPage {
  readonly page: Page;
  readonly inputBox: Locator;
  readonly outputBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputBox = page.locator('#input');
    this.outputBox = page.locator('#output');
  }

  async goto() {
    await this.page.setContent(`
      <textarea id="input"></textarea>
      <textarea id="output"></textarea>
      <script>
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        input.addEventListener('input', () => {
          output.value = "Translated: " + input.value;
        });
      </script>
    `);
  }

  async typeText(text: string) {
    await this.inputBox.fill(text);
  }
}
