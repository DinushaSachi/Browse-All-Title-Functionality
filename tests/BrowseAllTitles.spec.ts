import { test, expect } from '@playwright/test';

const BROWSE_ALL_TITLES = '//*[@id="main-content"]/div/div/section[3]/div/div/div/div[2]/a';

test('Test Forgot Password functionality', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  await page.click(BROWSE_ALL_TITLES) ;

 await expect(page).toHaveURL ('https://onlinelibrary.wiley.com/action/showPublications');

});

  


