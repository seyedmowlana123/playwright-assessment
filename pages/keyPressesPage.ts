import { Page, Locator } from '@playwright/test';

export class keyPressesPage{

readonly page: Page;
readonly textBox: Locator;
readonly resultDisplay: Locator;

constructor(page:Page){
    this.page = page;
    this.textBox = page.locator('#target');
    this.resultDisplay = page.locator('#result');
}
    async clickOnTextBox(){
        await this.textBox.click();
    }

    async pressTab(){
        await this.textBox.press('Tab');
    }

    async verifyIsTabPressed(){
        let confirmationMessage = await this.resultDisplay.textContent();
        return confirmationMessage;
    }
}