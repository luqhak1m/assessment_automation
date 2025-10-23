 
import { test } from '../fixtures/roles';
import { getCredentials } from '../utils/envVarManager';
import LeavePage from '../pages/LeavePage';

test('[TC04_01] Admin Verify Leave', async ({ admin_context })=>{
    const page=admin_context;
    const leavePage=new LeavePage(page);

    const employee_full_name=`${getCredentials().employee.first_name} ${getCredentials().employee.middle_name}  ${getCredentials().employee.last_name}`

    await leavePage.searchEmployeeAndSelectLeave(employee_full_name, 'Taken', 'Scheduled (5.00)');

})

// await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
// await page.getByRole('textbox', { name: 'Type for hints...' }).click();
// await page.getByRole('textbox', { name: 'Type for hints...' }).fill('emp_1'); // employee first name
// await page.getByText('emp_1 emp_1 emp_1').click(); // employee full name
// await page.getByText('-- Select --').first().click();
// await page.getByRole('option', { name: 'Taken' }).click();
// await page.getByRole('button', { name: 'Search' }).click();
// await page.getByRole('cell', { name: 'emp_1 emp_1 emp_1' }).first().click();
// await page.getByRole('cell', { name: 'Scheduled (5.00)' }).first().click();
 