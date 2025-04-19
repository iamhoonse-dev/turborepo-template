import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test("get started link", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Click the "Examples" link.
  await page.getByRole("link", { name: "Examples" }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(
  //   page.getByRole("heading", { level: 1, name: "Find your Template" }),
  // ).toBeVisible();
});
