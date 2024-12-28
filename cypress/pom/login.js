export default class loginPage {
    static textLogin() {
        return cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title');
    }

    static inputUsername (){
        return cy.get('[name="username"]');
    }  

    static inputPassword (){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
    }

    static menuDashboard(){
        return cy.get('.oxd-text oxd-text--h6.xd-topbar-header-breadcrumb-module');
    }
}
