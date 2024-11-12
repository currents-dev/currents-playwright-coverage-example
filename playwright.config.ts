import { devices, PlaywrightTestConfig } from "@playwright/test";

const baseURL = "http://localhost:3000";

const config: PlaywrightTestConfig = {
  timeout: 5 * 1000,

  use: {
    baseURL,
    actionTimeout: 0,
    screenshot: "off",
    video: "off",
    trace: "off",
  },

  projects: [
    {
      name: "chromium",
      retries: 2,
      metadata: {
        pwc: {
          tags: ["project:chrome"],
        },
      },
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      metadata: {
        pwc: {
          tags: ["project:firefox"],
        },
      },
      use: {
        ...devices["Desktop Firefox"],
      },
    },
  ],

  outputDir: "test-results/",
};

export default config;
