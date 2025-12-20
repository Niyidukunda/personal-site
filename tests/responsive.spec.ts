import { test, expect } from '@playwright/test';

const pages = [
  '/',
  '/about',
  '/blog',
  '/projects',
  '/contact',
];

const viewports = [
  { name: 'mobile', width: 375, height: 812 }, // iPhone X
  { name: 'tablet', width: 768, height: 1024 }, // iPad
  { name: 'laptop', width: 1280, height: 800 }, // Macbook Air
  { name: 'wide', width: 1920, height: 1080 }, // Desktop
];

test.describe('Responsive layout', () => {
  for (const pagePath of pages) {
    for (const vp of viewports) {
      test(`Page ${pagePath} should be responsive at ${vp.name}`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(pagePath);
        // Check for horizontal scroll (should not exist)
        const hasHorizontalScroll = await page.evaluate(() => {
          return document.body.scrollWidth > document.body.clientWidth + 2;
        });
        expect(hasHorizontalScroll).toBeFalsy();
        // Check that main content is visible
        const main = await page.$('main');
        expect(main).not.toBeNull();
        const box = await main!.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeGreaterThan(200); // Should not collapse
        expect(box!.height).toBeGreaterThan(200); // Should not collapse
      });
    }
  }
});
