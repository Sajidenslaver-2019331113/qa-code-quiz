# QA Code Quiz - Login Portal Test Report

## Overview

This report documents the end-to-end testing conducted on the login portal prototype using Cypress, as part of the QA testing quiz provided by MeldCX. The tests aim to verify the reliability of the login system, ensuring it meets the management's requirement for comprehensive evidence of functionality. The testing was initiated on Wednesday, July 2, 2025, at 05:35 PM +06.

## Current Status

As of the latest attempt, the tests have not completed successfully due to a failure in loading the application at `http://localhost:8081`. This is attributed to the development server not being operational, likely due to a dependency resolution error during the setup phase (detailed below). 

## Setup Issues

During the setup, running `npm start` triggered a prompt to install `@webpack-cli/serve`, which failed with the following error:

- **Error**: `ERESOLVE unable to resolve dependency tree` due to a conflict between `webpack@5.99.9` and `webpack-cli@3.3.12` (requiring `webpack@4.x.x`), while `@webpack-cli/serve@3.0.1` requires `webpack@^5.82.0`.
- **Resolution Attempt**: I tried updating `webpack-cli` to a version compatible with Webpack 5 (e.g., `^4`) and reinstalling dependencies to stabilize the setup.

## Intended Test Cases

The following test cases are planned to be executed once the server is operational:

| Test Case | Description | Status |
| --- | --- | --- |
| Login Form Display | Verifies that the login form is displayed with username, password inputs, and login button. | Pending |
| Successful Login | Tests logging in with valid credentials (e.g., "Sajid_Hossain", "TopSecret1234!") and checks account details display. | Pending |
| Failed Login | Attempts login with invalid credentials and ensures an error message ("INVALID USER") is shown. | Pending |
| Empty Credentials | Submits the form with empty fields and verifies that the form remains, indicating validation failure. | Pending |
| Logout Functionality | Logs in, then logs out, and checks if redirected back to the login page. | Pending |

## Cypress Test Execution

- **Current Result**: The Cypress test suite (`login.cy.js`) failed in the `beforeEach` hook with an error: "Sorry, we could not load: \http://localhost:8081/". This is due to the server not being accessible, as confirmed by the setup issue.
- **Next Steps**: Once the server starts with `npm start`, the tests will be rerun using `npx cypress open` or `npm run test:end-to-end` to validate the login portal's functionality.

## Justification for Testing Framework

Cypress was selected for its compatibility with React applications and the typical use for UI testing. It provides robust end-to-end testing capabilities, making it ideal for verifying user interactions like login and logout, aligning with the scenario's requirements.

## Additional Notes

- The project relies on a local `account.json` file for authentication, and tests assume this structure.
- Dependency conflicts are being addressed to ensure a stable testing environment.
- Updates to this report will reflect the outcome of the resolved setup and test execution.
