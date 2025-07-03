# 🧪 API Testing with Playwright

This project is a complete API Testing Framework built using [Playwright](https://playwright.dev/) and JavaScript. It supports **GET**, **POST**, **PUT**, **PATCH**, and **DELETE** requests and includes end-to-end testing flows.

---
 📁 Folder Structure
 tests/
├── end_to_end_testing_09.spec.js     # Full E2E API test
├── example.spec.js                   # Example or template test
├── get_api_request.spec.js           # GET API tests
├── patch_api_request.spec.js         # PATCH API tests
├── post_api_request_01.spec.js       # POST API test 1
├── post_api_request_02.spec.js       # POST API test 2
├── post_api_request_03.spec.js       # POST API test 3
├── post_api_request_04.spec.js       # POST API test 4
├── put_api_request.spec.js           # PUT API tests
└── query_parameters.spec.js          # GET with query parameters



## Install required packages:
npm install @playwright/test @faker-js/faker luxon
Optional (for reporting):
npm install -D allure-playwright

🚀 Running Tests
npx playwright test

Run a specific test
npx playwright test tests/get_api_request.spec.js

🧪 Sample Test Snippet
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const { DateTime } = require('luxon');

test('POST create user', async ({ request }) => {
  const response = await request.post('/api/users', {
    data: {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      created_at: DateTime.now().toISODate()
    }
  });
  expect(response.ok()).toBeTruthy();
});
📊 Test Reporting (Allure)
npx playwright test --reporter=allure-playwright
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
✅ What’s Covered
| Method | Description                                  |
| ------ | -------------------------------------------- |
| GET    | Fetch data with and without query parameters |
| POST   | Create new records with dynamic data         |
| PUT    | Full updates of existing records             |
| PATCH  | Partial update of existing records           |
| DELETE | (If added) Remove records                    |
| E2E    | Simulate entire request workflows            |
| Data   | Use of Faker & Luxon for test data           |

