import { test, expect, Page } from '@playwright/test';

export class keyPressesPage{

readonly page: Page;

constructor(page:Page){
    this.page = page;
}
   async pressTab(){
    await this.page.locator('#target').click();
    
    await this.page.locator('#target').press('Tab');
    //Assertion
    await expect(this.page.locator('#result')).toContainText('You entered: TAB');
    }
}


  