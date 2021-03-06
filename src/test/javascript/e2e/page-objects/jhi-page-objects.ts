import { element, by, ElementFinder, browser } from 'protractor';

export class NavBarPage {
    entityMenu = element(by.id('entity-menu'));
    accountMenu = element(by.id('account-menu'));
    adminMenu: ElementFinder;
    signIn = element(by.id('login'));
    register = element(by.css('[routerLink="register"]'));
    signOut = element(by.id('logout'));
    passwordMenu = element(by.css('[routerLink="password"]'));
    settingsMenu = element(by.css('[routerLink="settings"]'));

    constructor(asAdmin?: Boolean) {
        if (asAdmin) {
            this.adminMenu = element(by.id('admin-menu'));
        }
    }

    clickOnEntityMenu() {
        return this.entityMenu.click();
    }

    clickOnAccountMenu() {
        return this.accountMenu.click();
    }

    clickOnAdminMenu() {
        return this.adminMenu.click();
    }

    clickOnSignIn() {
        return this.signIn.click();
    }

    clickOnRegister() {
        return this.signIn.click();
    }

    clickOnSignOut() {
        return this.signOut.click();
    }

    clickOnPasswordMenu() {
        return this.passwordMenu.click();
    }

    clickOnSettingsMenu() {
        return this.settingsMenu.click();
    }

    clickOnEntity(entityName: string) {
        return element(by.css('[routerLink="' + entityName + '"]')).click();
    }

    clickOnAdmin(entityName: string) {
        return element(by.css('[routerLink="' + entityName + '"]')).click();
    }

    getSignInPage() {
        this.clickOnAccountMenu();
        this.clickOnSignIn();
        return new SignInPage();
    }

    goToEntity(entityName: string) {
        this.clickOnEntityMenu();
        return this.clickOnEntity(entityName);
    }

    goToSignInPage() {
        this.clickOnAccountMenu();
        this.clickOnSignIn();
    }

    goToPasswordMenu() {
        this.clickOnAccountMenu();
        this.clickOnPasswordMenu();
    }

    autoSignOut() {
        this.clickOnAccountMenu();
        this.clickOnSignOut();
    }
}

export class SignInPage {
    username = element(by.name('username'));
    password = element(by.name('password'));
    loginButton = element(by.css('input[type=submit]'));

    setUserName(username) {
        this.username.sendKeys(username);
    }

    getUserName() {
        return this.username.getAttribute('value');
    }

    clearUserName() {
        this.username.clear();
    }

    setPassword(password) {
        this.password.sendKeys(password);
    }

    getPassword() {
        return this.password.getAttribute('value');
    }

    clearPassword() {
        this.password.clear();
    }

    loginWithOAuth(username: string, password: string) {

        // Entering non angular site, tell webdriver to switch to synchronous mode.
        browser.waitForAngularEnabled(false);

        this.username.isPresent().then(() => {
            this.username.sendKeys(username);
            this.password.sendKeys(password);
            this.loginButton.click();
        }).catch((error) => {
            browser.waitForAngularEnabled(true);
        });
    }

    login() {
        return this.loginButton.click();
    }
}
