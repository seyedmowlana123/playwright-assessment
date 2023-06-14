## About Framework

* Test Automation framework is created using Playwright with TypeScript.

* Design pattern which is used in this framework is Page Object Model.

* All the pages are listed in the pages folder.

* testingLinks.spec.ts test class will call all the respective page classes for the step by step test execution with proper assertions.

* URL is stored in the .env file & it is called in the before each method in the test class. Therefore it'll execute before every test method.

* User credentials are also stored in .env file for security reasons.

* 2 json files are created to store data & it is called in test class to avoid hard coding the data.

* navigationPage is written to navigate throughout the application by clicking the link.

* Test class to run is included in the package.json file.

* Tried to achieve maximum code re-usability.

* All the tests will run in headless mode in 3 browsers Chromium, Firefox & Webkit. Browsers are configurable from the playwright.config.ts file in projects section.

* All the tests are independent from each other.

## How to setup

* Install Node version 14.17.3

* Git repository is created as a private repository. Only specific contributors will be given access.

* Clone the git repository into your local PC.

* Open the project folder from visual studio code.

* To install all the dependencies, type following command in the terminal "npm i".

* To run the test, type following command in the terminal - "npm test"

* Test results can be viewed by typing following command in the terminal "npx playwright show-report".