// export default class Forgot_password {


//   static accesswebsite(){
//       return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   }

//   static textLogin() {
//       return cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title');
//   }

//   static forgotyourPassword () {
//     return cy.get('class="oxd-text oxd-text--p orangehrm-login-forgot-header"');
// }

//   static buttonForgotPass () {
//       return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
//   }

//   static textResetPassword() {
//       return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').contains('Reset Password');
//       // return cy.get('h6').contains('Reset Password');
//   }

//   static inputUsername (){
//       return cy.get('[name="username"]');
//   }  
  
//   static bottonResetPassword() {
//       return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
//   }

//   static statusResetPassword() {
//       return cy.get('h6').contains('Reset Password link sent successfully')
//       // return cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').contains('Reset Password link sent successfully')
//   }

//   static buttonCancel(){
//       return cy.get('[type="button"]');
//   }
// }

export default class Buzz {


    static accesswebsite(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

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
    static textLogin() {
      return cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title');
  }
    static menuDashboard(){
    return cy.get('.oxd-text oxd-text--h6.xd-topbar-header-breadcrumb-module');
  }
  static openBuzzMenu(){
    return cy.contains('a',"Buzz");
  }
}
  