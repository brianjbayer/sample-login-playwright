import { test, expect } from '@playwright/test';
import { config } from "./config/config";
import { LoginPage } from './pages/LoginPage';

test('login with valid credential', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  const valid_username = config.loginCredentials.username;
  const valid_password = config.loginCredentials.password;

  await loginPage.login(valid_username, valid_password);

  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
});
