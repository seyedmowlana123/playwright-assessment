/*
@copyright - Seyed Mowlana
@Description - Page class for Add/Remove Elements page.
@Date - 14/06/2023
@Version - 2.0
*/
import { Page, Locator } from "@playwright/test";

export class addRemoveElementsPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.getByRole("button", { name: "Add Element" });
    this.deleteButton = page.getByRole("button", { name: "Delete" });
  }
  async addElement() {
    await this.addButton.click();
  }

  async removeElement() {
    await this.deleteButton.click();
  }

  async isButtonVisible(): Promise<boolean> {
    return await this.addButton.isVisible();
  }

  async isButtonHidden(): Promise<boolean> {
    return await this.deleteButton.isHidden();
  }
}