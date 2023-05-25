/*
@copyright - Seyed Mowlana
@Description - Page class for Add/Remove Elements page.
@Date - 24/05/2023
@Version - 1.0
*/
import { test, expect, Page } from '@playwright/test';

export class addRemoveElementsPage{

readonly page: Page;

constructor(page:Page){
    this.page = page;
}
   async addRemove(){

    await this.page.getByRole('button', { name: 'Add Element' }).click();
    //Assertion to check Delete button is visible
    await expect(this.page.getByRole('button', { name: 'Delete' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Delete' }).click();
    //Assertion to check Delete button is removed
    await expect(this.page.getByRole('button', { name: 'Delete' })).toBeHidden();
    }
}