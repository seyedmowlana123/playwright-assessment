/*
@copyright - Seyed Mowlana
@Description - Test Class to run the Tests.
@Date - 30/05/2023
@Version - 2.0
*/
import { test } from "@playwright/test";
import { navigationPage } from "../pageObjects/navigationPage";
import { checkBoxPage } from "../pageObjects/checkBoxPage";
import { dropDownPage } from "../pageObjects/dropDownPage";
import { addRemoveElementsPage } from "../pageObjects/addRemoveElementsPage";
import { formAuthenticationPage } from "../pageObjects/formAuthenticationPage";
import { keyPressesPage } from "../pageObjects/keyPressesPage";
const credentials = JSON.parse(JSON.stringify(require("../data/creds.json")));

test.describe("Test with 5 different links", () => {
  test.beforeEach(async ({ page }) => {
    //Load the URL for each test
    await page.goto("/");
  });

  test("Add Remove Elements", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onAddRemovePage = new addRemoveElementsPage(page);

    await navigateTo.navigateToPage("Add/Remove Elements");
    await onAddRemovePage.addElement();
    await onAddRemovePage.removeElement();
  });

  test("CheckBoxes", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onCheckBoxPage = new checkBoxPage(page);

    await navigateTo.navigateToPage("Checkboxes");
    await onCheckBoxPage.checkBoxOperations();
  });

  test("DropDowns", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onDropDownPage = new dropDownPage(page);

    await navigateTo.navigateToPage("Dropdown");
    await onDropDownPage.dropDownOperations();
  });

  test("Form Authentication", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onFormAuthenticationPage = new formAuthenticationPage(page);

    await navigateTo.navigateToPage("Form Authentication");
    await onFormAuthenticationPage.loginToApp(
      credentials.username,
      credentials.password
    );
  });

  test("Key Presses", async ({ page }) => {
    const navigateTo = new navigationPage(page);
    const onKeyPressPage = new keyPressesPage(page);

    await navigateTo.navigateToPage("Key Presses");
    await onKeyPressPage.pressTab();
  });
});