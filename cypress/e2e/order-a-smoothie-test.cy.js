/// <reference types ="cypress" />

// describe('All Login Tests', () => {
    // beforeEach(() => {
      // cy.visit('https://tropicalsmoothie.com/');


    it('Verify user cannot order a drink without entering zip code', () => {
        cy.visit('https://www.tropicalsmoothiecafe.com/');
        cy.get('.lg\:flex > .jsx-3531835680 > .border').click();
        cy.contains('Start Order').click();
    });

    it('Verify user can order a drink successfully', () => {
        cy.visit('https://www.tropicalsmoothiecafe.com/');
        cy.contains('Order Now').click();
        cy.get('placeholder="Address, City and State, or Postal Code"').focus().clear().type('22556');
        cy.contains('Start Order').click();
    });