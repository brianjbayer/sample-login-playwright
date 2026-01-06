import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('login with invalid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('iNValiD user name', 'invaLid pasSword');

  await expect(loginPage.errorBanner).toBeVisible();
  await expect(loginPage.errorBanner).toContainText(
    'Your username is invalid!'
  );
});
