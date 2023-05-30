import { expect, Page, Locator } from '@playwright/test';

export class checkBoxPage{

readonly page: Page;
readonly firstCheckBox: Locator;

constructor(page:Page){
    this.page = page;
    this.firstCheckBox = page.getByRole('checkbox').first();
}
   async checkBoxOperations(){
    await this.firstCheckBox.check();
    //Assertion to verify the first checkbox is checked
    await expect(this.page.getByRole('checkbox').first()).toBeChecked();

    await this.firstCheckBox.uncheck();
    }
 }