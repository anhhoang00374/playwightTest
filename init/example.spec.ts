// import { test, expect } from '@playwright/test';
import {test} from './CustomFixture';
import {expect} from "@playwright/test";
test('test toBeVisible', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const button = page.getByText('B', { exact: true });
  const target = page.getByText('A', { exact: true });
    await button.dragTo(target);
  const link = page.getByRole('link', { name: 'Elemental Selenium' });
  // Expect a title "to contain" a substring.
  await expect(link).toHaveText('Elemental Selenium');
});
test('test toBeVisible 1', async ({ page }) => {
    await page.goto('https://wishinfinite.com/playground#');
    const button = page.getByRole('button', { name: 'Mouse Events' })
    await button.hover();
    console.log(123);
    // Expect a title "to contain" a substring.
    // await expect(box?.width).toBeGreaterThan('Banana');
});
// test('test toBeVisible 1', async ({ page }) => {
//     await page.route('https://api-dev3-bizfuture.codeaplha.biz/api/v1/auth/sign_in', route => {
//         route.fulfill({
//             status: 500,
//
//         })
//     });
//     await page.goto('https://dev3-bizfuture.codeaplha.biz/annual_org_summaries');
//     await page.getByRole('textbox', {name: 'ログインID'}).fill('biztest@javis.vn');
//     await page.getByRole('textbox', {name: 'パスワード'}).fill('Javis123');
//     await page.getByRole('button', {name: 'ログイン'}).click()
//
//     await expect(page).toHaveURL('https://dev3-bizfuture.codeaplha.biz/annual_org_summaries');
//     console.log(123);
//     // Expect a title "to contain" a substring.
//     // await expect(box?.width).toBeGreaterThan('Banana');
// });
