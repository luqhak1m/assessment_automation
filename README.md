# OrangeHRM E2E Automation — Candidate README

Name: Luqman Hakim bin Noorazmi

## Setup

- Install dependencies with npm install (Playwright, Tyoescript, Dotenv, Prettier)
- The project has been tested using Chrome but other browsers are also supported using the command 'npx playwright test --project=chromium @  --project=firefox @ --project=webkit'
- Initialize a Git repository and link it to the GitHub repository

## Environment & Assumptions
(List environment variables for Admin, Employee, Supervisor credentials, and any assumptions you made.)

- The automation uses environment variables and files to manage credentials
= Admin credentials are fixed and stored in a .env file (and gitignored) with the username and password
- Employee and Supervisor credentials are stored in a JSON file that is read and written during test execution
- The system models Supervisor as a subclass of Employee, meaning all supervisors are employees but not all employees are supervisors
- Tests assume a fresh environment or that previous data will not conflict with new test data

## Run Tests

- The tests are designed to be executed sequentially and verify actions through element visibility on the page
- Test cases included:
  
| Test Case ID | Description                  | File Name                                |
|--------------|------------------------------|-----------------------------------------|
| TC01_01      | Admin creates employee       | admin.create-employee.spec.ts            |
| TC01_02      | Admin assigns supervisor     | admin.assign-supervisor.spec.ts          |
| TC02_01      | Employee applies for leave   | employee.apply-leave.spec.ts             |
| TC03_01      | Supervisor approves leave    | supervisor.approve-leave.spec.ts         |
| TC04_01      | Admin verifies leave         | admin.verify-leave.spec.ts               |
     
To run the tests:
Headed mode (with browser UI): npx playwright <test_filename> --headed --reporter=html
Headless mode: npx playwright <test_filename> --reporter=html
HTML report: npx playwright show-report

## Notes

- The project uses Page Object Model (POM) to structure automation code
- Each page has a selector class that contains element locators and a page object class that contains methods interacting with those elements
- Test cases are constructed using the page object methods which combine smaller actions into full workflows
- The page object model instance is instantiated on tests that uses elements and methods from the page
- This structure makes tests easier to maintain and reduces duplication
- An object (Employee, Leave, SystemUser) is created following its respective model attributes before being entered into the website field
- Each test uses a single custom fixture that logs the user into the website based on its specific role: Admin, Employee, and Supervisor
- The test flow is first generated using codegen, then the codegen output are separated into its own selector and POM files, before being used in the test file following the OOP principle
- One major issue encountered during this assessment is the constant timeout when navigating and finding elements on the page
- Some navigation such as login was able to be dealt with using 'waitUntil: "domcontentloaded"'
- Some elements are equipped with the '.waitFor({state: "visible"})' and the '.toBeVisible()' function, though it still ends up failing sometimes: 'Error: expect(locator).toBeVisible() failed' when trying to assert the result
- Most of the test cases fails due to this issue that halts the progress of the assessment
- All other components of the assessment are done following the requirements from the assessment question

## Formatting

- The prettier format are set as follow within the .prettierrc file:

{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
}

- '"semi": true' ensures every line is ended with a semicolon
- '"singleQuote": true' ensures every string uses single quote across all files
- '"trailingComma": "all"' ensures every final item is followed by a comma, even when there is no item after it
- This setting is applied to all .ts file within the /src folder using the command: npx prettier --write "src/**/*.ts"

