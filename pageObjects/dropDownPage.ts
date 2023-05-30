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
}
