/*
@copyright - Seyed Mowlana
@Description - Test Class to run the Tests.
@Date - 14/06/2023
@Version - 2.0
*/

import { expect, test } from "@playwright/test";
import { navigationPage } from "../pages/navigationPage";
import { checkBoxPage } from "../pages/checkBoxPage";
import { dropDownPage } from "../pages/dropDownPage";
import { addRemoveElementsPage } from "../pages/addRemoveElementsPage";
import { formAuthenticationPage } from "../pages/formAuthenticationPage";
import { keyPressesPage } from "../pages/keyPressesPage";
const messageData = JSON.parse(JSON.stringify(require("../data/messages.json")));
const values = JSON.parse(JSON.stringify(require("../data/selectValues.json")))

test.describe("Test with 5 different links", () => {
  test.beforeEach(async ({ page }) => {
    //Load the URL from .env file to run in each test
    const baseURL = process.env.BASE_URL;
    if (!baseURL) {
      throw new Error(messageData.ErrorMessage);
    }
    await page.goto(baseURL);
  });

  test("Add Remove Elements", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onAddRemovePage = new addRemoveElementsPage(page);

    await navigateTo.navigateToPage(values.AddRemove);
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

    await navigateTo.navigateToPage(values.Checkboxes);
    await onCheckBoxPage.checkCheckBox();
    let isChecked = await onCheckBoxPage.isCheckBoxChecked();
    await expect(isChecked).toBe(true);
    await onCheckBoxPage.unCheckCheckBox();
    isChecked = await onCheckBoxPage.isCheckBoxChecked();
    await expect(isChecked).toBe(false);
  });

  test("DropDowns", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onDropDownPage = new dropDownPage(page);

    await navigateTo.navigateToPage(values.Dropdown);
    await onDropDownPage.selectFirstOption();
    let ActSelectedValue = await onDropDownPage.getDropdownSelectedValue();
    await expect(ActSelectedValue).toEqual(values.DropDown1stOption);
    await onDropDownPage.selectSecondOption();
    ActSelectedValue = await onDropDownPage.getDropdownSelectedValue();
    await expect(ActSelectedValue).toEqual(values.DropDown2ndOption);
  });

  test("Form Authentication", async ({ page }) => {
    const username = process.env.UNAME;
    const password = process.env.PASSWORD;

    const navigateTo = new navigationPage(page);
    const onFormAuthenticationPage = new formAuthenticationPage(page);

    await navigateTo.navigateToPage(values.FormAuthentication);
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

    await navigateTo.navigateToPage(values.KeyPresses);
    await onKeyPressPage.clickOnTextBox();
    await onKeyPressPage.pressTab();
    const actualConMessage = await onKeyPressPage.verifyIsTabPressed();
    await expect(actualConMessage).toEqual(messageData.ExpTabMessage);
  });
});
