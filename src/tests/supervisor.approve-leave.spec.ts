import { test } from '../fixtures/roles';
import { getCredentials } from '../utils/envVarManager';
import LeavePage from '../pages/LeavePage';

test('[TC03_01] Supervisor Approve Leave', async ({ supervisor_context }) => {
  const page = supervisor_context;
  const leavePage = new LeavePage(page);

  const employee_full_name = `${getCredentials().employee.first_name} ${getCredentials().employee.middle_name}  ${getCredentials().employee.last_name}`;

  await leavePage.approveEmployeeLeave(
    employee_full_name,
    ' 2025-27-10 to 2025-31-10',
  );
});

//   await page.getByRole('link', { name: 'Leave' }).click();
//   await page.getByRole('link', { name: 'Leave List' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('emp_1'); // first name
//   await page.getByRole('option', { name: 'emp_1 emp_1 emp_1' }).click(); // first middle last name
//   await page.getByRole('button', { name: 'Search' }).click();
//   await page.getByRole('row', { name: ' 2025-27-10 to 2025-31-10' }).click();
//   await page.getByText('-27-10 to 2025-31-10').click();
//   await page.getByText('emp_1 emp_1 emp_1').click();
//   await page.getByText('CAN - Personal').click();
//   await page.getByText('45.00').click();
//   await page.getByText('5.00', { exact: true }).click();
//   await page.getByText('Pending Approval (5.00)').click();
//   await page.getByRole('row', { name: ' 2025-27-10 to 2025-31-10' }).click();
//   await page.getByRole('button', { name: 'Approve' }).click();
//   await page.getByText('Successfully Updated').click();
