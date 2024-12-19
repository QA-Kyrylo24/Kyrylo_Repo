import { test, expect } from '@playwright/test';

test('task1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    const usernameField = page.locator('#username');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('button[type="submit"]');

    await usernameField.fill('invalidUser');
    await passwordField.fill('invalidPassword');
    await loginButton.click();

    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toHaveText(/Your username is invalid!/);
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

    await usernameField.fill('tomsmith');
    await passwordField.fill('SuperSecretPassword!');
    await loginButton.click();

    const secureAreaHeader = page.locator('h2');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(secureAreaHeader).toHaveText('Secure Area');
    await expect(flashMessage).toHaveText(/You logged into a secure area!/);

    const logoutButton = page.locator('a[href="/logout"]');
    await logoutButton.click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await expect(flashMessage).toHaveText(/You logged out of the secure area!/);

});

test('task2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html');

    const checkbox1 = page.locator('input[value="checkbox1"]');
    const checkbox2 = page.locator('input[value="checkbox2"]');
    const checkbox3 = page.locator('input[value="checkbox3"]');

    await checkbox1.check();
    await checkbox2.check();
    await checkbox3.check();

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).toBeChecked();

    await checkbox1.uncheck();
    await checkbox2.uncheck();
    await checkbox3.uncheck();

    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox3).not.toBeChecked();
});

test('task3', async ({ page }) => {

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
    const iframe = page.frameLocator('iframe#iframeResult');


    const dropdown = iframe.locator('select');
    const submitButton = iframe.locator('input[type="submit"]');

    await dropdown.selectOption('saab');

    const selectedValue = await dropdown.inputValue();
    expect(selectedValue).toBe('saab');

    await submitButton.click();

    const resultText = iframe.locator('h2');
    await expect(resultText).toHaveText(/Your input was received as:/);
    const selectedCar = iframe.locator('div.w3-container.w3-large.w3-border');
    await expect(selectedCar).toHaveText('cars=saab');
});

test('task4', async ({ page }) => {

    await page.goto('http://formy-project.herokuapp.com/form');
    const firstNameField = page.getByPlaceholder('Enter first name');
    const lastNameField = page.getByPlaceholder('Enter last name');
    const jobTitleField = page.getByPlaceholder('Enter your job title');
    const collegeRadioButton = page.locator('input[value="radio-button-2"]');
    const maleCheckbox = page.locator('input[value="checkbox-1"]');
    const experienceDropdown = page.locator('#select-menu');
    const dateField = page.locator('#datepicker');
    const submitButton = page.locator('.btn-primary');
    const successMessage = page.locator('.alert.alert-success');
  
    await firstNameField.fill('Sam');
    await lastNameField.fill('Robertson');
    await jobTitleField.fill('Test Automation Engineer');
    await collegeRadioButton.check();
    await maleCheckbox.check();
    await experienceDropdown.selectOption('5-9');
    await dateField.fill('14/12/2024');
    await submitButton.click();
});

test('task5', async ({ page }) => {

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
    const phonesAndPDAsLink = page.locator('div#entry_217970 a[href]:has-text("Phones & PDAs")');
    await phonesAndPDAsLink.click();

    const header = page.locator('h1:has-text("Phones & PDAs")');
    await expect(header).toHaveText("Phones & PDAs");

    const priceFilterMin = page.locator('#mz-filter-content-0').getByPlaceholder('Minimum Price'); 
    const priceFilterMax = page.locator('#mz-filter-content-0').getByPlaceholder('Maximum Price'); 
    await priceFilterMin.fill('135');
    await priceFilterMax.fill('165');
    await priceFilterMin.click();
    await page.waitForTimeout(5000);

    const products = page.locator('.product-thumb');
    await expect(products).toHaveCount(8);

    const htcTouchHD = page.locator('a:has-text("HTC Touch HD")').nth(0);
    await expect(htcTouchHD).toBeVisible();
    await htcTouchHD.click();

    const addToCartButton = page.locator('.entry-section button[title="Add to Cart"]');
    await addToCartButton.click();

    const cartIcon = page.locator('.cart-icon');
    await cartIcon.click();

    const totalValue = page.locator('table.table.mb-0 td.text-right').last();
    await expect(totalValue).toHaveText('$146.00');



});
