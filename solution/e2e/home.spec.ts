import { test, expect } from "@playwright/test";

const { describe, beforeAll } = test;

describe("Home", () => {
  test("should render a title and number of the advice", async ({ page }) => {
    // GIVEN
    await page.goto("http://localhost:3000");
    // WHEN -> click of a button, fill a form, etc.
    // THEN
    const title = page.getByText("ADVICE #117");
    await expect(title).toBeVisible();
  });

  test("should render an advice", async ({ page }) => {
    // GIVEN
    await page.goto("http://localhost:3000");
    // THEN
    const advice = page.getByText(
      "It is easy to sit up and take notice, what difficult is getting up and taking action."
    );
    await expect(advice).toBeVisible();
  });

  test("should render a divider", async ({ page }) => {
    // GIVEN
    await page.goto("http://localhost:3000");
    // THEN
    const advice = page.getByTestId("divider");
    await expect(advice).toBeVisible();
  });

  test("should render a button", async ({ page }) => {
    // GIVEN
    await page.goto("http://localhost:3000");
    // THEN
    const button = page.getByTestId("button");
    await expect(button).toBeEnabled();
  });
});
