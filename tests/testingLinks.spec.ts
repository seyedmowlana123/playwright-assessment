/*
@copyright - Seyed Mowlana
@Description - Test Class to run the Tests.
@Date - 30/05/2023
@Version - 2.0
*/

import { expect, test } from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { checkBoxPage } from "../pages/checkBoxPage";
import { dropDownPage } from "../pages/dropDownPage";
import { addRemoveElementsPage } from "../pages/addRemoveElementsPage";
import { formAuthenticationPage } from "../pages/formAuthenticationPage";
import { keyPressesPage } from "../pages/keyPressesPage";
const messageData = JSON.parse(
  JSON.stringify(require("../data/messages.json"))
);

test.describe("Test with 5 different links", () => {
  test.beforeEach(async ({ page }) => {
    //Load the URL for each test
    const baseURL = process.env.BASE_URL;

    if (!baseURL) {
      throw new Error("BASE_URL is not defined in the .env file.");
    }
    await page.goto(baseURL);
  });

  test("Add Remove Elements", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onAddRemovePage = new addRemoveElementsPage(page);

    await navigateTo.navigateToPage("Add/Remove Elements");
    await onAddRemovePage.addElement();
    const buttonVisible = await onAddRemovePage.isButtonVisible();
    //Assertion to verify button added
    await expect(buttonVisible).toBe(true);
    await onAddRemovePage.removeElement();
    const buttonHidden = await onAddRemovePage.isButtonHidden();
    //Assertion to verify button removed
    await expect(buttonHidden).toBe(true);
  });

  test("CheckBoxes", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onCheckBoxPage = new checkBoxPage(page);

    await navigateTo.navigateToPage("Checkboxes");
    await onCheckBoxPage.checkCheckBox();
    const isChecked = await onCheckBoxPage.isCheckBoxChecked();
    await expect(isChecked).toBe(true);
    await onCheckBoxPage.unCheckCheckBox();
    await expect(isChecked).toBeFalsy();
  });

  test.only("DropDowns", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onDropDownPage = new dropDownPage(page);

    await navigateTo.navigateToPage("Dropdown");
    await onDropDownPage.selectFirstOption();
    //const firstValue = await onDropDownPage.getDropdownSelectedValue();
    //console.log("Selected Value - "+firstValue);
    //await expect(firstValue).toEqual("Option 1");
    //await onDropDownPage.selectSecondOption();

    //await onDropDownPage.dropDownOperations();
  });

  test("Form Authentication", async ({ page }) => {
    const username = process.env.UNAME;
    const password = process.env.PASSWORD;

    const navigateTo = new navigationPage(page);
    const onFormAuthenticationPage = new formAuthenticationPage(page);

    await navigateTo.navigateToPage("Form Authentication");
    await onFormAuthenticationPage.loginToApp(username, password);
    await onFormAuthenticationPage.getSuccessMessage();
    const actualSuccessMessage =
      await onFormAuthenticationPage.getSuccessMessage();
    // Assertion to verify successful login
    await expect(actualSuccessMessage).toEqual(messageData.ExpSuccessMessage);
  });

  test("Key Presses", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onKeyPressPage = new keyPressesPage(page);

    await navigateTo.navigateToPage("Key Presses");
    await onKeyPressPage.pressTab();
  });
});
