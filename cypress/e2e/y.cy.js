// import Forgot_password from "../pom/x"; "../pom/x";
// // import loginPage from "../pom/x";

// describe('Forgot Your Password Feature', () => {
//     beforeEach(() => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     });
  
//     it('User berhasil reset password dengan username benar', () => {
//       Forgot_password.forgotyourPassword().should('be.visible');
//       Forgot_password.forgotyourPassword().click();
//       // Forgot_password.url().should('include', '/requestPasswordResetCode'); 
//       // Forgot_password.h6().should('contain.text', 'Reset Password');
//       Forgot_password.inputUsername().type('Admin');
//       cy.intercept("POST", "/auth/requestResetPassword").as("requestResetPassword");
//       Forgot_password.bottonResetPassword().click();
//       cy.wait('@requestResetPassword').then((intercept) => {
//         expect(intercept.response.statusCode).to.equal(302);
//       });
//       Forgot_password.messages().should('have.text', 'Reset Password link sent successfully');
//     });
  
//     it('User berhasil reset password dengan username berbeda', () => {
//       loginPage.forgotyourPassword().should('be.visible');
//       loginPage.forgotyourPassword().click();
//       loginPage.url().should('include', '/requestPasswordResetCode'); 
//       loginPage.h6().should('contain.text', 'Reset Password'); 
//       loginPage.inputUsername().type('user123');
//       cy.intercept("POST", "/auth/requestResetPassword").as("requestResetPassword");
//       loginPage.buttonforgotPassword().click();
//       cy.wait('@requestResetPassword').then((intercept) => {
//         expect(intercept.response.statusCode).to.equal(302);
//       });
//       loginPage.messages().should('have.text', 'Reset Password link sent successfully');
//     });
  
//     // Test case baru: User mencoba reset password dengan username yang tidak valid
//     it('User gagal reset password tanpa mengisi username', () => {
//       loginPage.forgotyourPassword().should('be.visible');
//       loginPage.forgotyourPassword().click();
//       loginPage.url().should('include', '/requestPasswordResetCode'); 
//       loginPage.h6().should('contain.text', 'Reset Password'); 
    
//       // Tidak mengisi username
//       loginPage.inputUsername().should('be.empty'); // Pastikan input kosong
//       cy.intercept("POST", "**/auth/requestResetPassword").as("requestResetPassword");
//       loginPage.buttonforgotPassword().click();
//     });
//   });

import Buzz from "../pom/x";
// import myInfo from "../pom/x";

describe('Buzz Feature', () => {
  beforeEach(() => {
   Buzz.accesswebsite();
});

  // Test case 1: Success Direct to menu My Info
    it('Success Direct to menu Buzz', () => {
      //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        Buzz.textLogin().should('have.text','Login');
        Buzz.inputUsername().type('Admin');
        Buzz.inputPassword().type('admin123');
        // cy.intercept("GET","**buzz/anniversaries?limit=5").as('buzz/anniversaries?limit=5');
        cy.intercept("GET","**/buzz/feed?limit=10&offset=0&sortOrder=DESC&sortField=share.createdAtUtc").as('messagesbuzz');
        // cy.intercept("GET","**buzz/viewBuzzc").as('messagesbuzz');
        Buzz.buttonLogin().click();
        Buzz.openBuzzMenu().click();
        cy.wait('@messagesbuzz').then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(200);});
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
          .should('have.text','Buzz');
      });


      // it('User Login with Valid credentials',() => {
      //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //   loginPage.textLogin().should('have.text','Login');
      //   loginPage.inputUsername().type('Admin');
      //   loginPage.inputPassword().type('admin123');
      //   cy.intercept("GET","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("actionSummary");
      //   loginPage.buttonLogin().click();
      //   cy.wait("@actionSummary");
      //   cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
      //   });

})