import { test } from '../fixtures/roles';
import PIMPage from '../pages/PIMPage';
import UserManagementPage from '../pages/UserManagementPage';
import { getCredentials } from '../utils/envVarManager';

test('[TC01_02] Admin assign supervisor', async ({ admin_context }) => {
  const page = admin_context;

  const pim_page = new PIMPage(page);
  const user_management_page = new UserManagementPage(page);

  const credentials = getCredentials();
  const supervisor_name = `${credentials.supervisor.first_name} ${credentials.supervisor.last_name}`;

  pim_page.searchEmployee(supervisor_name);
  user_management_page.assignSupervisor(supervisor_name);
});
