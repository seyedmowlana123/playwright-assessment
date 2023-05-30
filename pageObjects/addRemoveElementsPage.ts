/*
@copyright - Seyed Mowlana
@Description - Page class for Add/Remove Elements page.
@Date - 30/05/2023
@Version - 2.0
*/
import { expect, Page, Locator } from '@playwright/test';

export class addRemoveElementsPage{

readonly page: Page;
readonly addButton: Locator;
readonly deleteButton: Locator;

constructor(page:Page){
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButton = page.getByRole('button', { name: 'Delete' });
}
   async addElement(){

    await this.addButton.click();
    //Assertion to check Delete button is visible
    await expect(this.addButton).toBeVisible();
    }

    async removeElement(){
        await this.deleteButton.click();
        //Assertion to check Delete button is removed
        await expect(this.deleteButton).toBeHidden();
    }
}