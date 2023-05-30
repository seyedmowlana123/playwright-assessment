
import { expect, Locator, Page } from '@playwright/test';

export class formAuthenticationPage{

readonly page: Page;
readonly userNameFiled: Locator;
readonly passWordField: Locator;
readonly loginButton: Locator;
readonly successMessage: Locator;

constructor(page:Page){
    this.page = page;
    this.userNameFiled = page.getByLabel('Username');
    this.passWordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: ' Login' });
    this.successMessage = page.locator('#flash');
}
   async userNamePassword(userName, password){

    await this.userNameFiled.click();
    await this.userNameFiled.fill(userName);
    await this.passWordField.click();
    await this.passWordField.fill(password);
    await this.loginButton.click();
    //Assertion for successful Login
    await expect(this.successMessage).toContainText(' You logged into a secure area! ');
    }
 }

