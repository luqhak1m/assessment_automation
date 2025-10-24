export const UserManagementSelector = {
  report_to_tab: 'role=link[name="Report-to"]',

  add_supervisor_button: 'role=button[name=" Add"]',
  supervisor_input: 'role=textbox[name="Type for hints..."]',
  dropdown_arrow: '.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow',
  supervisor_option: (name: string) => `role=option[name="${name}"]`,
  save_button: 'role=button[name="Save"]',
};
