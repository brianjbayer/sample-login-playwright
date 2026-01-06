import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // Login Input
  username = this.page.getByRole('textbox', { name: 'Username' });
  password = this.page.getByRole('textbox', { name: 'Password' });
  submit   = this.page.getByRole('button', { name: 'Login' });

  // Error Messages
  errorBanner = this.page.locator('#flash');

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }
}
