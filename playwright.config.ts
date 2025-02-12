import { currentsReporter } from "@currents/playwright";
import { devices, PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

const baseURL = "http://localhost:3000";

console.log("DATA::", process.env.CURRENTS_RECORD_KEY);

const config: PlaywrightTestConfig = {
  timeout: 10 * 1000,

  use: {
    baseURL,
    actionTimeout: 0,
    screenshot: "off",
    video: "off",
    trace: "off",
  },

  reporter: [
    currentsReporter({
      recordKey: process.env.CURRENTS_RECORD_KEY ?? "your-record-key",
      projectId: process.env.CURRENTS_PROJECT_ID ?? "your-project-id",
      coverage: {
        projects: true,
      },
    }),
  ],
  projects: [
    {
      name: "chromium",
      retries: 2,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      retries: 2,
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "webkit",
      retries: 2,
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],

  outputDir: "test-results/",
};

export default config;
