export const AdminSelector = {
  admin_menu: 'role=link[name="Admin"]',
  user_management_tab: 'role=listitem',
  users_menuitem: 'role=menuitem[name="Users"]',
  add_button: 'role=button[name=" Add"]',
  user_role_dropdown:
    'div.oxd-form-row:has-text("User Role") >> .oxd-select-text',
  user_role_option: (role: string) => `role=option[name="${role}"]`,
  employee_name_input: 'role=textbox[name="Type for hints..."]',
  employee_option: (name: string) => `role=option[name="${name}"]`,
  status_dropdown: 'div.oxd-form-row:has-text("Status") >> .oxd-select-text',
  status_option: (status: string) => `role=option[name="${status}"]`,
  username_input: 'role=textbox >> nth=2',
  password_input: 'role=textbox >> nth=3',
  confirm_password_input: 'role=textbox >> nth=4',
  save_button: 'role=button[name="Save"]',
};
