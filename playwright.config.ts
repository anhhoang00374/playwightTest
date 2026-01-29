import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    globalSetup: './global-setup',
  testDir: './init',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
      headless: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'on-first-retry',
      baseURL: process.env.BASE_URL
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
        //// liệt kê thêm các option tuỳ chỉnh cho project này (ví dụ):
        //  - headless: boolean
        //  - viewport: { width: number, height: number }
        //  - userAgent: string
        //  - locale: string
        //  - timezoneId: string
        //  - permissions: string[] (e.g., ['geolocation'])
        //  - geolocation: { latitude: number, longitude: number }
        //  - proxy: { server: string, bypass?: string }
        //  - ignoreHTTPSErrors: boolean
        //  - acceptDownloads: boolean
        //  - extraHTTPHeaders: Record<string,string>
        //  - launchOptions: { args?: string[], channel?: string, slowMo?: number }
        //  - video / screenshot / trace settings (e.g., video: 'retain-on-failure')
        //  - storageState: string | { cookies?: any[], origins?: any[] }
        //  // Thêm/ghi đè các option trên trong `use` cho project cụ thể nếu cần.// liệt kê thêm các option tuỳ chỉnh cho project này (ví dụ):
        //  - headless: boolean
        //  - viewport: { width: number, height: number }
        //  - userAgent: string
        //  - locale: string
        //  - timezoneId: string
        //  - permissions: string[] (e.g., ['geolocation'])
        //  - geolocation: { latitude: number, longitude: number }
        //  - proxy: { server: string, bypass?: string }
        //  - ignoreHTTPSErrors: boolean
        //  - acceptDownloads: boolean
        //  - extraHTTPHeaders: Record<string,string>
        //  - launchOptions: { args?: string[], channel?: string, slowMo?: number }
        //  - video / screenshot / trace settings (e.g., video: 'retain-on-failure')
        //  - storageState: string | { cookies?: any[], origins?: any[] }
        //  // Thêm/ghi đè các option trên trong `use` cho project cụ thể nếu cần.


    },
    //
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    //
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
