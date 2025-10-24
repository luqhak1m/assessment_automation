import { Page, Locator, expect } from '@playwright/test';
import { LeaveSelector } from '../selectors/leave.selector';
import { LeaveRequest } from '../models/LeaveRequest';

export default class LeavePage {
  private page: Page;

  // apply leave
  private leave_menu: Locator;
  private apply_link: Locator;
  private leave_type_dropdown: Locator;
  private from_date_input: Locator;
  private to_date_input: Locator;
  private apply_button: Locator;
  private my_leave_link: Locator;

  // leave list
  private leave_list_link: Locator;
  private employee_search_input: Locator;
  private search_button: Locator;
  private approve_button: Locator;
  private success_toast: Locator;

  private status_filter_dropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.leave_menu = page.locator(LeaveSelector.leave_menu);
    this.apply_link = page.locator(LeaveSelector.apply_link);
    this.leave_type_dropdown = page.locator(LeaveSelector.leave_type_dropdown);
    this.from_date_input = page.locator(LeaveSelector.from_date_input).first();
    this.to_date_input = page.locator(LeaveSelector.to_date_input).nth(1);
    this.apply_button = page.locator(LeaveSelector.apply_button);
    this.my_leave_link = page.locator(LeaveSelector.my_leave_link);
    this.status_filter_dropdown = page.locator(
      LeaveSelector.status_filter_dropdown,
    );
  }

  async navigateToLeaveApply() {
    await this.leave_menu.click();
    await this.apply_link.click();
  }

  async selectLeaveType(type: string) {
    await this.leave_type_dropdown.click();
    await this.page.locator(LeaveSelector.leave_type_option(type)).click();
  }

  async setFromDate(date: string) {
    await this.from_date_input.click();
    await this.page.getByText(date).click();
  }

  async setToDate(date: string) {
    await this.to_date_input.click();
    await this.page.getByText(date).click();
  }

  async clickApply() {
    await this.apply_button.click();
  }

  async viewMyLeave() {
    await this.my_leave_link.click();
  }

  async checkPendingApproval() {
    await this.page
      .locator(LeaveSelector.pending_approval_text('Pending Approval (5.00)'))
      .click();
  }

  async applyLeave(leave: LeaveRequest) {
    await this.navigateToLeaveApply();
    await this.selectLeaveType(leave.leave_type);
    await this.setFromDate(leave.from_date);
    await this.setToDate(leave.to_date);
    await this.clickApply();
  }

  async viewPendingApproval() {
    await this.viewMyLeave();
    await this.checkPendingApproval();
  }

  async navigateToLeaveList() {
    await this.leave_menu.click();
    await this.leave_list_link.click();
  }

  async searchEmployee(full_name: string) {
    await this.employee_search_input.click();
    await this.employee_search_input.fill(full_name);
    await this.page
      .locator(LeaveSelector.employee_search_option(full_name))
      .click();
    await this.search_button.click();
  }

  async selectLeaveRow(range_text: string) {
    await this.page.locator(LeaveSelector.leave_row(range_text)).click();
  }

  async approveLeave(range_text: string) {
    await this.selectLeaveRow(range_text);
    await this.approve_button.click();
    await expect(this.success_toast).toBeVisible();
  }

  async approveEmployeeLeave(full_name: string, range_text: string) {
    await this.navigateToLeaveList();
    await this.searchEmployee(full_name);
    await this.selectLeaveRow(range_text);
    await this.approveLeave(range_text);
  }

  // view leave status
  async selectStatus(status: string) {
    await this.status_filter_dropdown.first().click();
    await this.page.locator(LeaveSelector.status_option(status)).click();
  }

  async selectEmployee(full_name: string) {
    await this.page
      .locator(LeaveSelector.employee_cell(full_name))
      .first()
      .click();
  }

  async selectLeave(text: string) {
    await this.page.locator(LeaveSelector.leave_cell(text)).first().click();
  }

  async searchEmployeeAndSelectLeave(
    full_name: string,
    status: string,
    leaveText: string,
  ) {
    await this.navigateToLeaveList();
    await this.searchEmployee(full_name);
    await this.selectStatus(status);
    await this.selectEmployee(full_name);
    await this.selectLeave(leaveText);
  }
}
