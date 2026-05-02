import { test, expect } from "@playwright/test";

const pages = [
  { name: "home", path: "/" },
  { name: "backlog", path: "/backlog" },
];

async function scrollPageToRevealAll(page: import("@playwright/test").Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      const distance = 200;
      const delay = 80;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, delay);
    });
  });
  // Wait for all whileInView animations to finish
  await page.waitForTimeout(1500);
}

for (const { name, path } of pages) {
  test(`visual: ${name}`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    // Freeze CSS typewriter at natural start state
    await page.addStyleTag({
      content: `.typewriter::before { content: "Welcome" !important; animation: none !important; }`,
    });
    // Wait for Motion JS entrance animation on h1 to complete (opacity 0 → 1)
    await page.waitForFunction(() => {
      const h1 = document.querySelector("h1");
      if (!h1) return false;
      return parseFloat(window.getComputedStyle(h1).opacity) > 0.9;
    }, { timeout: 5000 });
    await scrollPageToRevealAll(page);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      maxDiffPixelRatio: 0.01,
      fullPage: true,
      animations: "disabled",
    });
  });
}
