export const LeaveSelector = {
  leave_menu: 'role=link[name="Leave"]',
  apply_link: 'role=link[name="Apply"]',
  leave_type_dropdown: 'text=-- Select --',
  leave_type_option: (name: string) => `role=option[name="${name}"]`,
  from_date_input: 'role=textbox[name="yyyy-dd-mm"]',
  to_date_input: 'role=textbox[name="yyyy-dd-mm"]',
  apply_button: 'role=button[name="Apply"]',
  my_leave_link: 'role=link[name="My Leave"]',
  pending_approval_text: (text: string) => `text=${text}`,

  leave_list_link: 'role=link[name="Leave List"]',
  employee_search_input: 'role=textbox[name="Type for hints..."]',
  employee_search_option: (full_name: string) =>
    `role=option[name="${full_name}"]`,
  search_button: 'role=button[name="Search"]',
  leave_row: (range_text: string) => `role=row[name="${range_text}"]`,
  approve_button: 'role=button[name="Approve"]',
  success_toast: 'text=Successfully Updated',

  status_filter_dropdown: 'div:has-text("-- Select --")',
  status_option: (status: string) => `role=option[name="${status}"]`,
  employee_cell: (full_name: string) => `role=cell[name="${full_name}"]`,
  leave_cell: (text: string) => `role=cell[name="${text}"]`,
};
