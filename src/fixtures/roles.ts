import { test as base, Page, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import LoginPage from '../pages/LoginPage';
import { getCredentials } from '../utils/envVarManager';



dotenv.config();

export const test=base.extend<{
    admin_context: Page;
    employee_context: Page;
    supervisor_context: Page;
}>({

    // admin login
    admin_context: async({ page }, use)=>{
        const loginPage=new LoginPage(page);
        await loginPage.login(process.env.USERNAME_ADMIN!, process.env.PASSWORD_ADMIN!);
        // await page.waitForLoadState('domcontentloaded');
        // await page.waitForURL('**/dashboard', { timeout: 15000 });
        // await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible({timeout: 30000}); // verify admin menu
        // await page.locator('text=Dashboard').waitFor({ state: 'visible', timeout: 30000 });
        
        // await page.waitForURL('**/dashboard/index', { timeout: 120000 });
        // await page.waitForLoadState('networkidle');
        // await page.getByRole('heading', { name: 'Dashboard' }).waitFor({ state: 'visible' });

        await use(page);
    },

    employee_context: async({ page }, use)=>{
        const credentials=getCredentials();
        const username=credentials.employee.username;
        const password=credentials.employee.password;

        const loginPage=new LoginPage(page);
        await loginPage.login(username, password);

        await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
        await use(page);
    },

    supervisor_context: async({ page }, use)=>{
        const credentials=getCredentials();
        const username=credentials.supervisor.username;
        const password=credentials.supervisor.password;

        const loginPage=new LoginPage(page);
        await loginPage.login(username, password);

        await expect(page.getByRole('link', { name: 'Leave' })).toBeVisible();
        await use(page);
    }
});

export { expect };