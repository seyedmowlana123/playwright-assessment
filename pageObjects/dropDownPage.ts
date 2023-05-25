import { test, expect, Page } from '@playwright/test';

export class dropDownPage{

readonly page: Page;

constructor(page:Page){
    this.page = page;
}
   async dropDownOperations(){
    
    await this.page.locator('#dropdown').selectOption('1');
    await this.page.locator('#dropdown').selectOption('2');
    await expect(this.page.locator('#dropdown')).toContainText('Option 2');
    }
 }