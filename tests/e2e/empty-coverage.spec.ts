import { test, expect } from "@currents/playwright-test-coverage";

test("should produce empty coverage report", async ({ page }) => {
  await page.goto("https://example.com");
  expect(true).toBe(true);
});
