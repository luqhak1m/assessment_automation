import { test as base, Page, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import LoginPage from '../pages/LoginPage';

dotenv.config();

export const test=base.extend<{
    admin_context: Page;
}>({
    admin_context: async({ page }, use)=>{
        const loginPage=new LoginPage(page);
        await loginPage.login(process.env.USERNAME_ADMIN!, process.env.PASSWORD_ADMIN!);
        await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible(); // verify admin menu
        await use(page);
    },
});

export { expect };