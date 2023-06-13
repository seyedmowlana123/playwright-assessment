/*
@copyright - Seyed Mowlana
@Description - Page class is to navigate across the application.
@Date - 30/05/2023
@Version - 2.0
*/
import { Page } from '@playwright/test';

export class navigationPage{

 readonly page: Page;

 constructor(page:Page){
    this.page = page;
 }
//To navigate across the application
 async navigateToPage(pageName){
    await this.page.getByRole('link', { name: pageName }).click();
 }
}
