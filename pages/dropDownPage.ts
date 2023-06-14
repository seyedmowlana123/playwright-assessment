import { Page, Locator } from "@playwright/test";

export class dropDownPage {
  readonly page: Page;
  readonly dropDown: Locator;
  readonly selectedValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropDown = page.locator("#dropdown");
    this.selectedValue = page.locator("//option[@selected='selected']");
  }

  async selectFirstOption(){
    await this.dropDown.selectOption("1");
  }

  async selectSecondOption(){
    await this.dropDown.selectOption("2");
  }

  async getDropdownSelectedValue(){
    const dropDowValue = await this.selectedValue.textContent();
    return dropDowValue;
  }
}