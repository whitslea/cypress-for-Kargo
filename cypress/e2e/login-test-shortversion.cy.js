import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

function loginAndSubmit(username, password); {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickSubmit();
};

it('Successful login with correct username and password', () => {
  loginAndSubmit('student', 'Password123');
  cy.get('.wp-block-button__link').click(); // Logout button
});

it('Invalid username and password will not be able to login', () => {
  loginAndSubmit('student', 'Password');
  cy.get('#error').should('exist');
});