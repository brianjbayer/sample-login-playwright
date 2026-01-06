import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test('login with valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const valid_username = process.env.LOGIN_USERNAME;
  const valid_password = process.env.LOGIN_PASSWORD;

  await loginPage.login(valid_username, valid_password);

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
