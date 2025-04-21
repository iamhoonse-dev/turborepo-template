import { defineConfig } from "@playwright/test";
import base from "@repo/playwright-config/base";

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
  ...base,
  reporter: [["list"], ["junit", { outputFile: "test-results/junit.xml" }]],
});
