import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Locators (safe + lazy-evaluated)
  get username() {
    return this.page.getByRole('textbox', { name: 'Username' });
  }

  get password() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get submit() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  get errorBanner() {
    return this.page.locator('#flash');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }
}
