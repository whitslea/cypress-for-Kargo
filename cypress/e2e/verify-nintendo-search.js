/// <reference types ="cypress" />

it('Verify Google Search for Nintendo Images', () => {
    cy.visit('https://google.com');
    cy.get('#APjFqb').type('Early Nintendo{Enter}');
    cy.contains('Images').click();
});