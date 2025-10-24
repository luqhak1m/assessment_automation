import { Page, Locator, expect } from '@playwright/test';
import { AdminSelector } from '../selectors/admin.selector';

export default class AdminPage {
  private page: Page;

  private admin_menu: Locator;
  private user_management_tab: Locator;
  private users_menuitem: Locator;
  private add_button: Locator;
  private user_role_dropdown: Locator;
  private employee_name_input: Locator;
  private status_dropdown: Locator;
  private username_input: Locator;
  private password_input: Locator;
  private confirm_password_input: Locator;
  private save_button: Locator;

  constructor(page: Page) {
    this.page = page;

    this.admin_menu = page.locator(AdminSelector.admin_menu);
    this.user_management_tab = page.locator(AdminSelector.user_management_tab);
    this.users_menuitem = page.locator(AdminSelector.users_menuitem);
    this.add_button = page.locator(AdminSelector.add_button);
    this.user_role_dropdown = page.locator(AdminSelector.user_role_dropdown);
    this.employee_name_input = page.locator(AdminSelector.employee_name_input);
    this.status_dropdown = page.locator(AdminSelector.status_dropdown);
    this.username_input = page.locator(AdminSelector.username_input);
    this.password_input = page.locator(AdminSelector.password_input);
    this.confirm_password_input = page.locator(
      AdminSelector.confirm_password_input,
    );
    this.save_button = page.locator(AdminSelector.save_button);
  }

  async clickAdminMenu() {
    await this.admin_menu.click();
  }

  async clickUserManagementTab() {
    const tab = this.page
      .locator('role=listitem')
      .filter({ hasText: 'User Management' });
    await tab.click();
  }

  async clickUsersMenuItem() {
    await this.users_menuitem.click();
  }

  async clickAddButton() {
    await this.add_button.click();
  }

  async selectUserRole(role: string) {
    // await this.user_role_dropdown.first().click();
    // await this.page.locator(AdminSelector.user_role_option(role)).click();
    // await this.page.locator(AdminSelector.user_role_dropdown).first().click();
    // await this.page.locator(AdminSelector.user_role_option(role)).click();

    const dropdown = this.user_role_dropdown.first();
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.click();
    await this.page.locator(AdminSelector.user_role_option(role)).click();
  }

  async enterEmployeeName(name: string) {
    await this.employee_name_input.fill(name);
    await this.page.locator(AdminSelector.employee_option(name)).click();
  }

  async selectStatus(status: string) {
    // await this.status_dropdown.click();
    // await this.page.locator(AdminSelector.status_option(status)).click();
    const dropdown = this.status_dropdown.nth(1);
    await dropdown.waitFor({ state: 'visible' });
    await dropdown.click();
    await this.page.locator(AdminSelector.status_option(status)).click();
  }

  async enterUsername(username: string) {
    await this.username_input.fill(username);
  }

  async enterPassword(password: string) {
    await this.password_input.fill(password);
    await this.confirm_password_input.fill(password);
  }
  async clickSaveButton() {
    await this.save_button.click();
  }

  async createSystemUser(
    name: string,
    role: string,
    status: string,
    username: string,
    password: string,
  ) {
    await this.clickAdminMenu();
    await this.clickUserManagementTab();
    await this.clickUsersMenuItem();
    await this.clickAddButton();
    await this.selectUserRole(role);
    await this.enterEmployeeName(name);
    await this.selectStatus(status);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSaveButton();
  }
}
