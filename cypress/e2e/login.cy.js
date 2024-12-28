import loginPage from "../pom/login";


describe('Login Feature', () => {

    // Test  Case 1: User Login with Valid Credentials
      it('LOG-01 User Login with Valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login');
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary")
          .as("actionSummary");
        loginPage.buttonLogin().click();
        cy.wait("@actionSummary");
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
          .should('have.text','Dashboard')
        });

      // Test Case 2: User Login with Invalid Username 
    it('LOG-02 User Login with Invalid Username', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('Admin1'); 
      loginPage.inputPassword().type('admin12');
      cy.intercept("GET","**/core/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').its('response.statusCode').should('eq', 304);
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      });

    //Test Case 3: User Login with Invalid Password
    it('LOG-03 User Login with Invalid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('Admin'); 
      loginPage.inputPassword().type('user123');
      cy.intercept("GET","**/core/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').its('response.statusCode').should('eq', 304);
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      });

      //Test Case 4: User Login with Invalid Username and Invalid Password
    it('LOG-04 User Login with Invalid Username and Invalid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('testadmin'); 
      loginPage.inputPassword().type('Admin123');
      cy.intercept("GET","**/core/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').its('response.statusCode').should('eq', 304);
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials');  
      });

      // Test Case 5: Users Login without input Username and Password
    it('LOG-05 Users Login without input Username and Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername();
      loginPage.inputPassword();
      loginPage.buttonLogin().click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('have.text','RequiredRequired');  // Memastikan pesan error tampil
      });

    // Test Case 6: User Login with Blank Username and input Valid Password  
    it('LOG-06 User Login with Blank Username and input Valid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername();
      loginPage.inputPassword().type('admin123');
      loginPage.buttonLogin().click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('have.text','Required');  // Memastikan pesan error tampil
      });

    // Test Case 7: User Login with Input Valid Username and Blank Password    
    it('LOG-07 User Login with Input Valid Username and Blank Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('Admin');
      loginPage.inputPassword();
      loginPage.buttonLogin().click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('have.text','Required');  // Memastikan pesan error tampil
      });

    // Test Case 8: User Login with Blank username and Input Invalid password
    it('LOG-08 User Login with Blank username and Input Invalid password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername();
      loginPage.inputPassword().type('admin321');
      loginPage.buttonLogin().click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('have.text','Required');  // Memastikan pesan error tampil
        // cy.wait(1000);
      });

    // Test Case 9: User Login with Invalid username and Input blank password
    it('LOG-09 User Login with Invalid username and Input blank password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('adminku');
      loginPage.inputPassword();
      loginPage.buttonLogin().click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')
        .should('have.text','Required');  // Memastikan pesan error tampil
        // cy.wait(1000);
      });

    // Test Case 10: User Login with username containing special characters
    it('LOG-10 User Login with username containing special characters', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.textLogin().should('have.text','Login');
      loginPage.inputUsername().type('!@#$%^&*()_+{}|:"<>?'); 
      loginPage.inputPassword().type('admin123');
      cy.intercept("GET","**/core/i18n/messages").as("messages");
      loginPage.buttonLogin().click();
      cy.wait('@messages').its('response.statusCode').should('eq', 304);
      cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
        .should('have.text','Invalid credentials');  
   });

     // Test case 11: Invalid Login unregistered account 
      it('LOG-11 User Login with username containing special characters', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginPage.textLogin().should('have.text','Login');
        loginPage.inputUsername().type('account1'); 
        loginPage.inputPassword().type('user123');
        cy.intercept("GET","**/core/i18n/messages").as("messages");
        loginPage.buttonLogin().click();
        cy.wait('@messages').its('response.statusCode').should('eq', 304);
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
          .should('have.text','Invalid credentials');  
    });

    // Test case 12: Invalid Login unregistered account 
    it('LOG-12 User Login with unregistered account', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.textLogin().should('have.text','Login');
    loginPage.inputUsername(); 
    loginPage.inputPassword();
    // cy.intercept("GET","**/core/i18n/messages").as("messages");
    loginPage.buttonLogin().click();
    // cy.wait('@messages').its('response.statusCode').should('eq', 304);
    // cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]')
    //   .should('have.text','Invalid credentials');  
});


    


  
})