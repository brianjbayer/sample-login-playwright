import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',

  reporter: [
    ['html', { open: 'never' }],

    ['json', { outputFile: 'test-results/test-results.json' }],
  ],

  use: {
    baseURL: process.env.BASE_URL,
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

