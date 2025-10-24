import { Page, Locator, expect } from '@playwright/test';
import { UserManagementSelector } from '../selectors/userManagement.selector';

export default class UserManagementPage {
  private page: Page;
  private report_to_tab: Locator;
  private add_supervisor_button: Locator;
  private supervisor_input: Locator;
  private dropdown_arrow: Locator;
  private save_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.report_to_tab = page.locator(UserManagementSelector.report_to_tab);
    this.add_supervisor_button = page.locator(
      UserManagementSelector.add_supervisor_button,
    );
    this.supervisor_input = page.locator(
      UserManagementSelector.supervisor_input,
    );
    this.dropdown_arrow = page.locator(UserManagementSelector.dropdown_arrow);
    this.save_button = page.locator(UserManagementSelector.save_button);
  }

  async clickReportToTab() {
    await this.report_to_tab.click();
  }

  async clickAddSupervisorButton() {
    await this.add_supervisor_button.click();
  }

  async enterSupervisorName(name: string) {
    await this.supervisor_input.fill(name);
  }

  async clickDropdownArrow() {
    await this.dropdown_arrow.click();
  }

  async clickSupervisorOption(name: string) {
    const option = this.page.locator(
      UserManagementSelector.supervisor_option(name),
    );
    await option.click();
  }

  async clickSaveButton() {
    await this.save_button.click();
  }

  async assignSupervisor(name: string) {
    await this.clickReportToTab();
    await this.clickAddSupervisorButton();
    await this.enterSupervisorName(name);
    await this.clickDropdownArrow();
    await this.clickSupervisorOption(name);
    await this.clickSaveButton();
  }
}
