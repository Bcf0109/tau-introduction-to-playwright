import {test,expect} from '@playwright/test';

//test.describe ('Open google', ({page})  => {
 //   await page.goto('https://www.google.com');
//    await expect(page).toHaveTitle(/Google/);
 // });

//test.describe('Open Google', () => {
  test('Check its open', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle("Google");
    });
  //});