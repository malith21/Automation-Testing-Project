# ITPM Assignment 1 - Automation Testing Project

## 📋 Project Overview

This is an automation testing project built with Playwright and TypeScript. The project demonstrates end-to-end testing capabilities using the Page Object Model (POM) design pattern.

## 🛠️ Technologies Used

- **Playwright** v1.58.0 - Modern end-to-end testing framework
- **TypeScript** - Type-safe JavaScript for better code quality
- **Node.js** v18+ - JavaScript runtime environment

## 📁 Project Structure

```
itpm_assignment1/
├── tests/                  # Test files directory
│   └── *.spec.ts          # Test specification files
├── pages/                  # Page Object Model files
│   └── translatorPage.ts  # Translator page object
├── playwright.config.ts    # Playwright configuration
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd itpm_assignment1
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## 💻 Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run specific test file:
```bash
npx playwright test tests/<test-file-name>.spec.ts
```

### Run tests in debug mode:
```bash
npx playwright test --debug
```

### View test report:
```bash
npx playwright show-report
```

## ⚙️ Configuration

The project is configured in `playwright.config.ts` with the following settings:

- **Test Directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Headless Mode**: Disabled (browser visible during test execution)
- **Viewport**: 1280x720
- **Action Timeout**: 10 seconds
- **Reporter**: HTML report (opens automatically after test run)

## 📝 Page Object Model

The project uses the Page Object Model (POM) design pattern for better test maintainability:

### TranslatorPage
Located in `translatorPage.ts`, this page object encapsulates:
- Input and output text areas
- Page navigation methods
- Text input methods

Example usage:
```typescript
import { TranslatorPage } from './translatorPage';

const translatorPage = new TranslatorPage(page);
await translatorPage.goto();
await translatorPage.typeText('Hello World');
```

## 📊 Test Reports

After running tests, an HTML report is automatically generated and opened in your browser. The report includes:
- Test execution results
- Screenshots and videos (on failure)
- Detailed error messages
- Test duration and statistics

## 🔧 Development

### Adding New Tests

1. Create a new file in the `tests/` directory with `.spec.ts` extension
2. Import necessary modules and page objects
3. Write your test cases using Playwright's test API

Example:
```typescript
import { test, expect } from '@playwright/test';
import { TranslatorPage } from '../pages/translatorPage';

test('should translate text', async ({ page }) => {
  const translatorPage = new TranslatorPage(page);
  await translatorPage.goto();
  await translatorPage.typeText('Hello');
  // Add assertions
});
```

### Creating Page Objects

1. Create a new file in the `pages/` directory
2. Define locators and methods for page interactions
3. Export the class for use in tests

## 🐛 Troubleshooting

### Common Issues

**Issue**: Browsers not installed
```bash
npx playwright install
```

**Issue**: Tests timing out
- Increase timeout in `playwright.config.ts`
- Check network connectivity

**Issue**: Element not found
- Verify selectors in page objects
- Check if page has loaded completely

## 📄 License

ISC

## 👥 Malith Yasintha

ITPM Assignment 1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues and questions, please create an issue in the repository.

---

**Note**: This project is part of ITPM (IT Project Management) coursework and demonstrates practical implementation of automation testing principles.
