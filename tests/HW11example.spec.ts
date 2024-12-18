import { test, expect } from '@playwright/test';
// Task 1. 
// Напишіть тест Playwright, який виконує такі дії:
// Перейдіть на веб-сайт https://example.com/.
// Переконайтеся, що назва сторінки "Example Domain" за допомогою toBe().
// Переконайтеся, що URL-адреса сторінки містить підрядок "example.com", використовуючи toContain().
// Переконайтеся, що сторінка містить текст «This domain is for use in illustrative examples» за допомогою toMatch().
// Переконайтеся, що текст елемента <h1> точно відповідає "Example Domain", використовуючи `toHaveText`

// Task 2. 
// Напишіть тест Playwright, який виконує такі дії:
// Перейдіть на домашню сторінку Playwright https://playwright.dev/
// Переконайтеся, що URL-адреса сторінки починається з "https://playwright.dev", використовуючи toStartWith().
// Переконайтеся, що сторінка містить посилання з текстом «Get started», використовуючи toHaveCount().

// Task 3. 
// Створіть тест за допомогою Playwright, який виконує такі дії:
// Перейти на сайт https://www.google.com.
// Знайти поле пошуку і ввести в нього пошуковий запит "Playwright"
// Надіслати пошуковий запит, активувавши відповідну кнопку
// Перевірити, чи пошуковий запит успішний на сторінці із результатами пошуку

// Task 4. 
// Створіть тест за допомогою Playwright, який виконує такі дії:
// Перейдіть на домашню сторінку Playwright https://playwright.dev/ .
// Переконайтеся, що в назві сторінки є слово «Playwright».
// Натисніть на домашній сторінці посилання «Get started».
// Переконайтеся, що URL-адреса нової сторінки містить /docs.

test('task1', async ({ page }) => {
  await page.goto('https://example.com/');

  const title = await page.title();
  expect(title).toBe('Example Domain');

  await expect(page.url()).toContain('example.com');
 
  const bodyText = await page.textContent('body');
  expect(bodyText).toMatch(/This domain is for use in illustrative examples/);

  const header = page.locator('h1');
  await expect(header).toHaveText('Example Domain');
});

test('task2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const url = page.url();
  expect(url.startsWith('https://playwright.dev')).toBeTruthy();

  const links = page.locator('a', { hasText: 'Get started' });
  await expect(links).toHaveCount(1);
});

test('task3', async ({ page }) => {
  await page.goto('https://www.google.com');

  const searchBox = page.getByTitle('Пошук');
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');

  const results = page.locator('#search'); 
  await expect(results).toBeVisible();

  const link = page.locator('a h3', { hasText: 'Playwright' });
  await expect(link.first()).toBeVisible();
});

test('task4', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const title = await page.title();
  expect(title).toContain('Playwright');

  const getStartedLink = page.getByRole('link', { name: 'Get started' });
  await getStartedLink.click();

  await expect(page).toHaveURL(/.*\/docs/);
});