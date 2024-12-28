
// import Directory from "../../cypress/pom/directory";
import haldirectory from "../pom/directory_coba";

describe('Search Directory Feature',() => {
  beforeEach(() => { 
    haldirectory.Website()
  });
//  describe('Search Directory Feature',()=>{

  // Test case 1: Success Direct to menu Directory
  it('Success Direct to menu Directory', ()=>{
    //  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      haldirectory.textLogin().should('have.text','Login');
      haldirectory.inputUsername().type('Admin');
      haldirectory.inputPassword().type('admin123');
      cy.intercept("GET","**/directory/employees?limit=14&offset=0").as('employees?limit=14&offset=0');
      haldirectory.buttonLogin().click();
      haldirectory.openDirectoryMenu().click();
      cy.wait('@employees?limit=14&offset=0').then((intercept)=>{
      expect(intercept.response.statusCode).to.equal(200);});
      cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
        .should('have.text','Directory');
    });
    
    // Test case2: Success search data with Complete Data
    it('Success search data with Complete Data', ()=>{
      // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      haldirectory.textLogin().should('have.text','Login');
      haldirectory.inputUsername().type('Admin');
      haldirectory.inputPassword().type('admin123')
      haldirectory.buttonLogin().click();
      haldirectory.openDirectoryMenu().click();
      // halamandirectory.inputEmployeeName().type('Peter');
      // cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
      haldirectory.inputEmployeeName().type('Rebecca');
      cy.get('div[role=listbox]').should('not.be.empty').contains('Rebecca Harmony').first().click();
      haldirectory.clickJobTitle();
      haldirectory.selectJobTitle();
      haldirectory.clickLocation();
      haldirectory.optionLocation();
      haldirectory.selectLocation(); 
      // cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3&jobTitleId=2').as('searchRequest'); // Request URL
      cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=5&empNumber=11&jobTitleId=9').as('searchRequest'); // Request URL
      haldirectory.clickSearch();
      cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
      haldirectory.ProfileUser();
    });

      // Test case 3:'Success search Employee with Input Username and select Job Title'
      it('Success search Employee with Input Username and select Job Title', ()=>{
        haldirectory.textLogin().should('have.text','Login');
        haldirectory.inputUsername().type('Admin');
        haldirectory.inputPassword().type('admin123')
        haldirectory.buttonLogin().click();
        haldirectory.openDirectoryMenu().click();
        // halamandirectory.inputEmployeeName().type('Peter');
        // cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        haldirectory.inputEmployeeName().type('Russel');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Russel Hamilton').first().click();
        haldirectory.clickJobTitle();
        haldirectory.selectjobTitle();
        // cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3&jobTitleId=2').as('directorySearchRequest');
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=9&jobTitleId=7').as('searchRequest'); // Request URL
        haldirectory.clickSearch();
        cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
        haldirectory.ProfileUser();
      });
  
      // Test case 4:'Success search Employee with Input Username and select Location'
      it('Success search Employee with Input Username and select Location', ()=>{
        haldirectory.textLogin().should('have.text','Login');
        haldirectory.inputUsername().type('Admin');
        haldirectory.inputPassword().type('admin123')
        haldirectory.buttonLogin().click();
        haldirectory.openDirectoryMenu().click();
        haldirectory.inputEmployeeName().type('Rebecca');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Rebecca Harmony').first().click();
        // halamandirectory.inputEmployeeName().type('Peter');
        // cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
        haldirectory.clickLocation();
        haldirectory.optionLocation();
        haldirectory.selectLocation();
        // cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=2&empNumber=3').as('directorySearchRequest');
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&locationId=5&empNumber=11').as('searchRequest');
        haldirectory.clickSearch();
        cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
        haldirectory.ProfileUser();
      });
  
      // Test case 5: 'Success search Employee with input Employee Name'
      it('Success search data using Employee Name', ()=>{
        haldirectory.textLogin().should('have.text','Login');
        haldirectory.inputUsername().type('Admin');
        haldirectory.inputPassword().type('admin123');
        haldirectory.buttonLogin().click();
        haldirectory.openDirectoryMenu().click();
        haldirectory.inputEmployeeName().type('Peter');
        cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').click();
        // Directory.inputEmployeeName().type('Rebecca');
        // cy.get('div[role=listbox]').should('not.be.empty').contains('Rebecca Harmony').click();
        cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3').as('searchRequest');
        // cy.intercept('GET', '**/directory/employees?limit=14&offset=0&empNumber=3').as('directorySearchRequest');
        haldirectory.clickSearch();
        cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
        haldirectory.ProfileUser();
      });

}) 

