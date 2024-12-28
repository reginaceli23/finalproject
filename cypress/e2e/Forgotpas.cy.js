import ForgotPassword from "../pom/forgot";


describe('Search Directory Feature',() => {
  beforeEach(() => { 
    ForgotPassword.accesswebsite()
  });

// describe('Forgot Your Password Feature',() => {
    // Test case 1: User success Forgot Password with Valid Credentials
    it('FOR-01 User success Forgot Password with Valid Credentials', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        ForgotPassword.buttonForgotPass().click();
        ForgotPassword.textResetPassword().should('have.text','Reset Password');
        cy.url().should('include', '/requestPasswordResetCode'); 
        ForgotPassword.inputUsername().type('Admin');
        cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
        ForgotPassword.bottonResetPassword().click();
        cy.wait('@requestResetPassword').its('response.statusCode').should('eq', 302);
        ForgotPassword.statusResetPassword().should('have.text','Reset Password link sent successfully');
      });
    
    // Test case 2: User reset username with Different Username
    it('FOR-02 User reset username with Different Username', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        ForgotPassword.buttonForgotPass().click();
        ForgotPassword.textResetPassword().should('have.text','Reset Password');
        cy.url().should('include', '/requestPasswordResetCode'); 
        ForgotPassword.inputUsername().type('UserAddmin1');
        cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
        ForgotPassword.bottonResetPassword().click();
        cy.wait('@requestResetPassword').its('response.statusCode').should('eq', 302);
        ForgotPassword.statusResetPassword().should('have.text','Reset Password link sent successfully');
      });
    
    // Test case 3: User Cancel Reset Password
    it('FOR-03 User Cancel Reset Password', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        ForgotPassword.buttonForgotPass().click();
        ForgotPassword.textResetPassword().should('have.text','Reset Password');
        cy.url().should('include', '/requestPasswordResetCode'); 
        ForgotPassword.inputUsername().type('Admin');
        cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
        ForgotPassword.buttonCancel().click();
        ForgotPassword.textLogin().should('have.text','Login');

    })

    // Test case 4: assword Without Input Username
    it('FOR-04 User Reset Password Without Input Username', () => {
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        ForgotPassword.buttonForgotPass().click();
        ForgotPassword.textResetPassword().should('have.text','Reset Password');
        cy.url().should('include', '/requestPasswordResetCode'); 
        ForgotPassword.inputUsername();
        cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
        ForgotPassword.bottonResetPassword().click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');
      });
    
    })
    