## About Framework

Test Automation framework is created using Playwright with TypeScript.

Design pattern which is used in this framework is Page Object Model.

All the pages are listed in the pageObjects folder.

testingLinks.spec.ts test call will call all the respective page classes for the step by step test execution with proper assertions.

URL is stored in the playwright.config.ts file & it is called in the before each method in the test class. Therefore it'll execute before every test method.

User credentials are stored in creds.json file which is inside the data folder for security reasons.

navigationPage is written to navigate throughout the application by clicking the link.

Tried to achieve maximum code re-usability.

It is possible to enable & disable the browsers from the playwright.config.ts file.

All the tests are independent from each other.

## How to setup

Install Node version 14.17.3

Git repository is created as a private repository. Only specific contributors will be given access.

Clone the git repository into your local PC.

Open the project folder from visual studio code.

To install Playwright, type following command in the terminal "npm init playwright".

Choose TypeScript.

To run the test, type following command in the terminal - npx playwright test tests/testingLinks.spec.ts

Test results can be viewed by typing following command in the terminal "npx playwright show-report".