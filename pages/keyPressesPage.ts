import { expect, Page, Locator } from '@playwright/test';

export class keyPressesPage{

readonly page: Page;
readonly textBox: Locator;
readonly resultDisplay: Locator;

constructor(page:Page){
    this.page = page;
    this.textBox = page.locator('#target');
    this.resultDisplay = page.locator('#result');
}
   async pressTab(){
    await this.textBox.click();
    
    await this.textBox.press('Tab');
    //Assertion
    await expect(this.resultDisplay).toContainText('You entered: TAB');
    }
}


  