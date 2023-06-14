
import { Locator, Page } from '@playwright/test';

export class formAuthenticationPage{

readonly page: Page;
readonly userNameFiled: Locator;
readonly passWordField: Locator;
readonly loginButton: Locator;
readonly successMessage;

constructor(page:Page){
    this.page = page;
    this.userNameFiled = page.getByLabel('Username');
    this.passWordField = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: ' Login' });
    this.successMessage = page.locator('#flash');
}
   async loginToApp(userName, password){

    await this.userNameFiled.click();
    await this.userNameFiled.fill(userName);
    await this.passWordField.click();
    await this.passWordField.fill(password);
    await this.loginButton.click();
    }

    async getSuccessMessage(){

        let successResponse = await this.successMessage.textContent();
        //Trim the message to get only the content. It returns with the cross (X).
        successResponse = successResponse.trim();
        let stringWithoutSpaces = successResponse.slice(0,-1);
        stringWithoutSpaces = stringWithoutSpaces.trim();
        return stringWithoutSpaces;
    }   
 }