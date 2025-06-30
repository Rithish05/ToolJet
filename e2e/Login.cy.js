describe('Login Test on ToolJet Cypress QA site', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://v3-lts-eetestsystem.tooljet.com/login/cypress-qa?redirectTo=/');

    cy.get('#email')
      .should('be.visible')
      .type('intern@example.com');

    cy.get('#password')
      .should('be.visible')
      .type('password');

    cy.contains('button', 'Sign in')
      .should('be.visible')
      .click();

    cy.url().should('not.include', '/login');

    cy.title().should('eq', 'Dashboard | ToolJet');
  });
});
