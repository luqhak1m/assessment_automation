import { Page, Locator, expect } from '@playwright/test';
import { PIMSelector } from '../selectors/PIM.selector';

export default class PIMPage{
    private page: Page;

    private PIM_menu: Locator;
    private add_employee_link: Locator;
    private first_name_input: Locator;
    private middle_name_input: Locator;
    private last_name_input: Locator;
    private employee_id_input: Locator;
    private create_login_toggle: Locator;
    private username_input: Locator;
    private password_input: Locator;
    private user_status_radio: Locator;
    private save_button: Locator;
    private success_toast: Locator;

    private employee_list_link: Locator;
    private employee_list_search_id_input: Locator;
    private search_button: Locator;

    constructor(page: Page){
        this.page=page;

        this.PIM_menu=page.locator(PIMSelector.PIM_menu);
        this.add_employee_link=page.locator(PIMSelector.add_employee_link);
        this.first_name_input=page.locator(PIMSelector.first_name_input);
        this.middle_name_input=page.locator(PIMSelector.middle_name_input);
        this.last_name_input=page.locator(PIMSelector.last_name_input);
        this.employee_id_input=page.locator(PIMSelector.employee_id_input);
        this.create_login_toggle=page.locator(PIMSelector.create_login_toggle);
        this.username_input=page.locator(PIMSelector.username_input);
        this.password_input=page.locator(PIMSelector.password_input);
        this.user_status_radio=page.locator(PIMSelector.user_status_radio);
        this.save_button=page.locator(PIMSelector.save_button);
        this.success_toast=page.locator(PIMSelector.success_toast);

        this.employee_list_link=page.locator(PIMSelector.employee_list_link);
        this.employee_list_search_id_input=page.locator(PIMSelector.employee_list_search_id_input);
        this.search_button=page.locator(PIMSelector.search_button);
    }

    async clickPIMMenu(){
        await this.PIM_menu.click();
        // await this.page.getByRole('heading', { name: 'PIM' }).waitFor({ state: 'visible', timeout: 120000 });
    }

    async clickAddEmployee(){
        await this.add_employee_link.click();
        // await this.page.getByRole('heading', { name: 'Add Employee' }).waitFor({ state: 'visible', timeout: 120000 });
    }

    async enterFirstName(name: string){
        await this.first_name_input.fill(name);
    }
    async enterMiddleName(name: string){
        await this.middle_name_input.fill(name);
    }
    async enterLastName(name: string){
        await this.last_name_input.fill(name);
    }

    async enterEmployeeID(id: string){
        await this.employee_id_input.fill(id);
    }

    async clickLoginToggle(){
        await this.create_login_toggle.click();
    }

    async enterUsername(username: string){
        await this.username_input.fill(username);
    }

    // enter password and confirm password
    async enterPassword(password: string){
        await this.password_input.first().fill(password);
        await this.password_input.nth(1).fill(password);
    }

    // click the first checkbox (status: enable)
    async clickUserStatusCheckbox(){
        await this.user_status_radio.first().click();
    }

    async clickSaveButton(){
        await this.save_button.click();
    }

    async assertSuccessMessage(){
        await expect(this.success_toast).toBeVisible();
    }

    async createEmployee(first_name: string, middle_name: string, last_name: string, id: string, username: string, password: string){
        await this.clickPIMMenu();
        await this.clickAddEmployee();
        await this.enterFirstName(first_name);
        await this.enterMiddleName(middle_name);
        await this.enterLastName(last_name);
        await this.enterEmployeeID(id);
        await this.clickLoginToggle();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickUserStatusCheckbox();
        await this.clickSaveButton();
        await this.assertSuccessMessage();
    }

    async clickEmployeeList(){
        await this.employee_list_link.click();
    }

    async searchEmployeeID(id: string){
        await this.employee_list_search_id_input.fill(id);
    }

    async clickSearchButton(){
        await this.search_button.click();
    }

    async clickEmployeeCell(id: string) {
        const cell=this.page.locator(PIMSelector.employee_result_cell(id));
        await cell.click();
    }

    async searchEmployee(id: string){
        await this.clickPIMMenu();
        await this.clickEmployeeList();
        await this.searchEmployeeID(id);
        await this.clickSearchButton();
        await this.clickEmployeeCell(id);
    }
}