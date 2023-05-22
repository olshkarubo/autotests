const { BasePage } = require("./basePage");
exports.SignUpPage = class SignUpPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullname = page.locator("[placeholder='Full name']");
        this.email = page.locator("[placeholder='Email address']");
        this.password = page.locator ("[type='password']")
        this.registerButton = page.getByRole('button');
        this.SignIn = page.getByRole('link');


    }

    async register(FullName, Email, password) {
        await this.fullname.type(FullName);
        await this.email.type(Email);
        await this.password.type(password);
        await this.registerButton.click();
    }
    async OpenSignIn() {
        await this.SignIn.click();
    }


}