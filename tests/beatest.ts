import {test,expect} from '@playwright/test';

test ('Open google', async ({page})  => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
  });