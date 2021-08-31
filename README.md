# Swaglabs WDIO GUI Tests

## Summary

Automated end-to-end GUI tests for SauceLabs' ["SwagLabs"](https://saucedemo.com) test website, mainly to play around with a simple [WebdriverIO v7](https://webdriver.io) automation framework setup. WDIO is both the test runner and asserter, paired with the [Mocha](https://mochajs.org) test framework. It hooks into [Chromedriver](https://chromedriver.chromium.org) to control the browser.

The goal of these tests are purely demonstrative of techniques for using WDIO, rather than actual testing of the chosen dummy/unfinished website. While most tests will pass, some of them are known to fail by design, just to showcase a comprehensive end-to-end testing plan. For example, the checkout page allows you to go through the flow without much validation (doesn't require a valid zip code or even an item "added" to work).

## Prerequisites

- Google Chrome (last tested with version 92)
- Node.js (last tested with version LTS 14.17.5)

## How to run tests

1. Clone this repository (`git clone https://github.com/Jmcosel/swaglabs-wdio-gui-tests.git`)
2. Navigate to the root of the folder and install the dependencies (`cd swaglabs-wdio-gui-tests && npm i`)
3. Run all tests with the following node command: `npx wdio wdio.config.js`
4. Append `--spec` followed by the file path for a `.spec.js` file to just run that file.
5. If you wish for a debugging experience, add `DEBUG=true` as an environment variable to the above command
