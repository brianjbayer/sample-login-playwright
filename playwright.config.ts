import { defineConfig, devices } from '@playwright/test';
import { env } from './e2e/config/env';

export default defineConfig({
  testDir: './e2e',

  reporter: [
    ['html', { open: 'never' }],

    ['json', { outputFile: 'test-results/test-results.json' }],
  ],

  use: {
    baseURL: env.baseURL,
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

