import Directory from "../../cypress/pom/directory";

describe('Search Directory Feature',() => {
  beforeEach(() => { 
    Directory.accessWebsite()
  });

  // Test case 1: Success Direct to menu Directory
  it('DIR-01 Success Direct to menu Directory', ()=>{
      Directory.textLogin().should('have.text','Login');
      Directory.inputUsername().type('Admin');
      Directory.inputPassword().type('admin123');
      cy.intercept("GET","**/directory/employees?limit=14&offset=0").as('employees?limit=14&offset=0');
      Directory.buttonLogin().click();
      Directory.menuDirectory().click();
      cy.wait('@employees?limit=14&offset=0').then((intercept)=>{
      expect(intercept.response.statusCode).to.equal(200);});
      cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Directory');
    });

    
    // Test case2: Success search data with Complete Data
    it('DIR-02 Success search data with Complete Data', ()=>{
      Directory.textLogin().should('have.text','Login');
      Directory.inputUsername().type('Admin');
      Directory.inputPassword().type('admin123')
      Directory.buttonLogin().click();
      Directory.menuDirectory().click();
      // Input Employee Name
      Directory.inputEmployeeName().type('Peter');
      cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
      // Select Job Title
      Directory.clickJobTitle();
      Directory.selectJobTitle();
      // Select Location
      Directory.clickLocation();
      Directory.optionLocation();
      Directory.selectLocation(); 
      cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2').as('directorySearchRequest'); // Request URL
      Directory.clickSearch();
      cy.wait('@directorySearchRequest').its('response.statusCode').should('eq', 200);
      Directory.ProfileUser();
    });

      // Test case 3:'Success search Employee with Input Username and select Job Title'
      it('DIR-03 Success search Employee with Input Username and select Job Title', ()=>{
        Directory.textLogin().should('have.text','Login');
        Directory.inputUsername().type('Admin');
        Directory.inputPassword().type('admin123')
        Directory.buttonLogin().click();
        Directory.menuDirectory().click();
        Directory.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        Directory.clickJobTitle();
        Directory.selectJobTitle();
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3&jobTitleId=2').as('directorySearchRequest');
        Directory.clickSearch();
        cy.wait('@directorySearchRequest').its('response.statusCode').should('eq', 200);
        Directory.ProfileUser();
      });
  
      // Test case 4:'Success search Employee with Input Username and select Location'
      it('DIR-04 Success search Employee with Input Username and select Location', ()=>{
        Directory.textLogin().should('have.text','Login');
        Directory.inputUsername().type('Admin');
        Directory.inputPassword().type('admin123')
        Directory.buttonLogin().click();
        Directory.menuDirectory().click();
        Directory.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        Directory.clickLocation();
        Directory.optionLocation();
        Directory.selectLocation();
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3').as('directorySearchRequest');
        Directory.clickSearch();
        cy.wait('@directorySearchRequest').its('response.statusCode').should('eq', 200);
        Directory.ProfileUser();
      });
  
      // Test case 5: 'Success search Employee with input Employee Name'
      it('DIR-05 Success search data using Employee Name', ()=>{
        Directory.textLogin().should('have.text','Login');
        Directory.inputUsername().type('Admin');
        Directory.inputPassword().type('admin123');
        Directory.buttonLogin().click();
        Directory.menuDirectory().click();
        Directory.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').click();
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3').as('directorySearchRequest');
        Directory.clickSearch();
        cy.wait('@directorySearchRequest').its('response.statusCode').should('eq', 200);
        Directory.ProfileUser();
      });

})