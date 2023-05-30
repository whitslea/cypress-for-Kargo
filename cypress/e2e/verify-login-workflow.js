import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('Verify successful login with correct username and password', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('Password123');
    loginPage.clickSubmit();
    cy.get('.wp-block-button__link').click(); // Logout button
  });

  it('Verify error message is shown with incorrect username and/or password', () => {
    loginPage.enterUsername('stude');
    loginPage.enterPassword('Password');
    loginPage.clickSubmit();
    cy.get('#error').should('exist');
  });
});