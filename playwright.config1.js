// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout:40*1000,
  expect:{
    timeout:50*1000
  },
  retries:1,
  //workers:2,
  //fullyParallel:true,
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  
  projects:[{
    name:'chromeProject',
    use: {
   headless:false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure',
   browserName:'chromium'

  },
  },/*{
    name:'firefoxProject',
    use: {
   headless:false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure',
   browserName:'firefox',
   ...devices['Galaxy A55'],
   permissions:['geolocation','camera','microphone'],
   //geolocation:{latitude:9.99,longitude:8.77}
   ignoreHTTPSErrors:true
  },
  },*/{
    name:'webkitProject',
    use: {
   headless:false,
   screenshot:'only-on-failure',
   video:'retain-on-failure',
   trace:'retain-on-failure',
   browserName:'webkit',
   viewport:{
    width:500,
    height:500

   }
  },
  }
  ]

  /* Configure projects for major browsers */
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

