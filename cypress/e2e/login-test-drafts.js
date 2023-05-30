import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

describe('All Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('Successful login with correct credientials', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('Password123');
    loginPage.clickSubmit();
    cy.get('.wp-block-button__link').click(); // Logout button
  });

  it('Invalid username and password will not be able to login', () => {
    loginPage.enterUsername('stud123');
    loginPage.enterPassword('Password');
    loginPage.clickSubmit();
    cy.get('#error').should('exist');
  });
});

// DRY = Don't Repeat Yourself
// this function should be in helper folder. then you can reference this function in your tests
function loginAndSubmit(username, password) {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickSubmit();
};

it('Name of the test: Login good', () => {
  loginAndSubmit('student', 'corect pasword');
  cy.get('.wp-block-button__link').click(); // Logout button
});

it('Name of the test: Login bad', () => {
  loginAndSubmit('student', 'incorect passowr');
  cy.get('#error').should('exist');
});