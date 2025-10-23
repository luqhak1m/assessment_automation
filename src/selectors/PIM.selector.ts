
export const PIMSelector={
    PIM_menu: 'role=link[name="PIM"]',

    // create employee
    add_employee_link: 'role=link[name="Add Employee"]',
    first_name_input: 'role=textbox[name="First Name"]',
    middle_name_input: 'role=textbox[name="Middle Name"]',
    last_name_input: 'role=textbox[name="Last Name"]',
    employee_id_input: 'div.oxd-input-group:has(label:has-text("Employee Id")) input',
    create_login_toggle: '.oxd-switch-input',
    username_input: 'div.oxd-input-group:has(label:has-text("Username")) input',
    password_input: 'input[type="password"]',
    user_status_radio: '.oxd-radio-input',
    save_button: 'role=button[name="Save"]',
    success_toast: 'text=Successfully Saved',

    // search employee and assign sv
    employee_list_link: 'role=link[name="Employee List"]',
    employee_list_search_id_input: 'div.oxd-input-group:has(label:has-text("Employee Id")) input',
    search_button: 'role=button[name="Search"]',
    employee_result_cell: (id: string) => `role=cell[name="${id}"]`,
}