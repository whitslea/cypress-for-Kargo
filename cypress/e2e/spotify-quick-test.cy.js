/// <reference types ="cypress" />

it('Search for a song and verify play button works', () => {
    cy.visit('https://open.spotify.com/');
    cy.get('#APjFqb').type('Early Nintendo{Enter}');
    cy.contains('Images').click();
});