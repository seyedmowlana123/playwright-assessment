import { Page, Locator } from '@playwright/test';

export class checkBoxPage{

readonly page: Page;
readonly firstCheckBox: Locator;

constructor(page:Page){
    this.page = page;
    this.firstCheckBox = page.getByRole('checkbox').first();
}
   async checkCheckBox(){
    await this.firstCheckBox.check();
    }

    async unCheckCheckBox(){
        await this.firstCheckBox.uncheck();
    }

    async isCheckBoxChecked(): Promise<boolean> {
        return await this.firstCheckBox.isChecked();
      }
 }