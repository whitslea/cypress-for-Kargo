/// <reference types ="cypress" />

it('Verify create a new card works', () => {
    cy.visit('https://www.tropicalsmoothiecafe.com/');
    cy.get('#APjFqb').type('Early Nintendo{Enter}');
    cy.contains('Images').click();
});