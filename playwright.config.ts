import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 1,
  testDir: './src/tests',
  use: {
    headless: false,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
});
