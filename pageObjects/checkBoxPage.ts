import { test, expect, Page } from '@playwright/test';

export class checkBoxPage{

readonly page: Page;

constructor(page:Page){
    this.page = page;
}
   async checkBoxOperations(){

    await this.page.getByRole('checkbox').first().check();
    //Assertion to verify the first checkbox is checked
    await expect(this.page.getByRole('checkbox').first()).toBeChecked();

    await this.page.getByRole('checkbox').first().uncheck();

    }
 }