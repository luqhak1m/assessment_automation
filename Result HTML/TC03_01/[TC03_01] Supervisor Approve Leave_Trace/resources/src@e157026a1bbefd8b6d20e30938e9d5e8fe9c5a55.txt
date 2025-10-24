import { test } from '../fixtures/roles';
import LeavePage from '../pages/LeavePage';
import { LeaveRequest } from '../models/LeaveRequest';
import { getCredentials } from '../utils/envVarManager';

function generateLeave(name: string): LeaveRequest {
  const leave_type = 'CAN - Personal';
  const from_date = '27';
  const to_date = '31';
  const employee = name;
  return { leave_type, from_date, to_date, employee };
}

test('[TC02_01] Employee Apply Leave', async ({ employee_context }) => {
  const page = employee_context;
  const leavePage = new LeavePage(page);

  const employee_full_name = `${getCredentials().employee.first_name} ${getCredentials().employee.middle_name}  ${getCredentials().employee.last_name}`;
  const leave = generateLeave(employee_full_name);

  await leavePage.applyLeave(leave);
  await leavePage.viewPendingApproval();
});

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('link', { name: 'Leave' }).click();
//   await page.getByRole('link', { name: 'Apply' }).click();
//   await page.getByText('-- Select --').click();
//   await page.getByRole('option', { name: 'CAN - Personal' }).click();
//   await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
//   await page.getByText('27').click();
//   await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
//   await page.getByText('31').click();
//   await page.getByText('-- Select --').click();
//   await page.getByRole('option', { name: 'All Days' }).click();
//   await page.getByText('-- Select --').click();
//   await page.getByText('Half Day - Morning').click();
//   await page.getByText('Half Day - Morning').click();
//   await page.getByText('Specify Time').click();
//   await page.getByRole('textbox', { name: 'hh:mm' }).first().click();
//   await page.getByText('Specify Time').click();
//   await page.locator('div').filter({ hasText: /^Comments$/ }).nth(1).click();
//   await page.getByRole('button', { name: 'Apply' }).click();
//   await page.getByRole('link', { name: 'My Leave' }).click();
//   await page.getByText('Pending Approval (5.00)').click();
// });

//   await page.getByText('-- Select --').click();
//   await page.getByRole('option', { name: 'CAN - Personal' }).click();
//   await page.locator('.oxd-icon.bi-calendar').first().click();
//   await page.getByText('27').click();
//   await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
//   await page.getByText('31').click();
//   await page.getByRole('button', { name: 'Apply' }).click();

// await page.getByRole('link', { name: 'My Leave' }).click();
// await page.getByRole('link', { name: 'Apply' }).click();
// await page.getByRole('link', { name: 'My Leave' }).click();
// await page.getByRole('row', { name: ' 2025-27-10 to 2025-31-10' }).click();
// await page.getByText('Pending Approval (5.00)').click();
// await page.getByText('-27-10 to 2025-31-10').click();
// await page.getByText('emp_1 emp_1 emp_1').click();
// await page.getByRole('cell', { name: '-27-10 to 2025-31-10' }).click();
// await page.getByRole('cell', { name: 'emp_1 emp_1 emp_1' }).click();
// await page.getByRole('cell', { name: 'CAN - Personal' }).click();
// await page.getByRole('cell', { name: '45.00' }).click();
// await page.getByRole('cell', { name: '5.00', exact: true }).click();
