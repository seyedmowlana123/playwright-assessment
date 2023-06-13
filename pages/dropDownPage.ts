import { expect, Page, Locator } from "@playwright/test";

export class dropDownPage {
  readonly page: Page;
  readonly dropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropDown = page.locator("#dropdown");
  }
  async dropDownOperations() {
    await this.dropDown.selectOption("1");
    await expect(this.page.locator("#dropdown")).toContainText("Option 1");
    await this.dropDown.selectOption("2");
    await expect(this.page.locator("#dropdown")).toContainText("Option 2");
  }

  async selectFirstOption(){
    await this.dropDown.selectOption("1");
  }

  async selectSecondOption(){
    await this.dropDown.selectOption("2");
  }

  async verifyWhichOptionIsSelected(){
    return await this.dropDown.textContent();
  }

  // async getDropdownSelectedValue(): Promise<string> {
  //   //const dropdownElement: Locator = this.page.locator(this.dropdownSelector);
  //   // const selectedValue = await this.dropDown.selectOption(value);
  //   // return selectedValue;

  //    const selectedOption = await this.dropDown.selectOption("1");
  //    const selectedValue = await selectedOption(1);
  //    return selectedValue;
  // }

}
