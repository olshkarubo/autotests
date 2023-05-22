const { test, expect, request } = require('@playwright/test');
const { SignUpPage } = require('../pages/RegPage');
const { users } = require('../../test-data/users');
const { userData } = require('../../test-data/data');
const config = require("../../playwright.config");

let RegPage ;
const env = config.default.use.env;


test.describe('Registration tests', () => {

    test.beforeEach(async ({ page }) => {
        RegPage = new SignUpPage(page);
        await RegPage.open();
    });
        

    test('Sign up with valid data', async ({ page }) => {
        await RegPage.register(userData.generatedFullName, userData.generatedEmail, userData.password);
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });
    test ('Open Sign in page', async({page}) => {
        await RegPage.OpenSignIn();
        await expect(page).toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');

    });

});