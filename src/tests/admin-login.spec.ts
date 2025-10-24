import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import LoginPage from '../pages/LoginPage';

dotenv.config();

test('Admin Login test_01', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(
    process.env.USERNAME_ADMIN!,
    process.env.PASSWORD_ADMIN!,
  );
  await page.getByRole('link', { name: 'Admin' }).click();
});

// test("Admin Login", async({ page })=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     // await page.getByPlaceholder('Username').fill(process.env.USERNAME_ADMIN!);
//     // await page.getByPlaceholder('Password').fill(process.env.PASSWORD_ADMIN!);
//     await page.locator('input[name="username"]').fill(process.env.USERNAME_ADMIN!);
//     await page.locator('input[name="password"]').fill(process.env.PASSWORD_ADMIN!);
//     await page.click('button[type="submit"]');
//     await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
//     await page.getByRole('link', { name: 'Admin' }).click();
//     await expect(page.locator('h6.oxd-topbar-header-breadcrumb-module')).toHaveText('Admin');
// })

// <input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="">
// <input data-v-1f99f73c="" class="oxd-input oxd-input--active" type="password" name="password" placeholder="Password">
// <button data-v-10d463b7="" data-v-0af708be="" type="submit" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"><!----> Login <!----></button>
// <img data-v-bdd6d943="" alt="profile picture" class="oxd-userdropdown-img" src="/web/index.php/pim/viewPhoto/empNumber/7"> <p data-v-bdd6d943="" class="oxd-userdropdown-name">First Name Last Name</p>
// <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">Admin</h6>

// codegen:

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//   await page.getByRole('link', { name: 'Admin' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//   await page.getByRole('heading', { name: 'Admin' }).click();
// });
