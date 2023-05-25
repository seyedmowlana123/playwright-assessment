
import { test, expect, Page } from '@playwright/test';

export class formAuthenticationPage{

readonly page: Page;

constructor(page:Page){
    this.page = page;
}
   async userNamePassword(userName, password){

    await this.page.getByLabel('Username').click();
    await this.page.getByLabel('Username').fill(userName);
    await this.page.getByLabel('Password').click();
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: ' Login' }).click();
    //Assertion for successful Login
    await expect(this.page.locator('#flash')).toContainText(' You logged into a secure area! ');
  
    }
 }

