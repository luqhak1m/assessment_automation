import { Page, Locator } from '@playwright/test';
import { LoginSelectors } from '../selectors/login.selector';

export default class LoginPage{
     // set LoginPage instance's attributes
    private page: Page;
    private username_field: Locator;
    private password_field: Locator;
    private login_button: Locator;
    
    /** 
     * LoginPage instance constructor
     * @param {string} page LoginPage instance
     */
    constructor(page: Page){
        this.page=page;
        this.username_field=page.locator(LoginSelectors.username_field);
        this.password_field=page.locator(LoginSelectors.password_field);
        this.login_button=page.locator(LoginSelectors.login_button);
    }

    /**
     * Go to login page
     */
    async goto(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {waitUntil: 'networkidle'})
    }

    /**
     * Enter username field with 'username' parameter
     * @param {string} username Username
     */
    async enterUsername(username: string){
        await this.username_field.fill(username);
    }

    /**
     * Enter password field with 'password' parameter
     * @param {string} password Password
     */
    async enterPassword(password: string){
        await this.password_field.fill(password);
    }

    /**
     * Click login button, use after username and password entered
     */
    async clickLogin(){
        await this.login_button.click();
    }

    async login(username: string, password: string){
        await this.goto();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
        // await this.page.waitForLoadState('networkidle', {timeout: 60000});
        // await this.page.getByRole('link', { name: 'Admin' }).waitFor({ state: 'visible', timeout: 60000 });
    }
}