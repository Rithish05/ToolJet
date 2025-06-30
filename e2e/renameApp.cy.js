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

    Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
      });

    cy.contains('h3', 'Rithish')
  .should('be.visible')
  .parents('[class="homepage-app-card-list-item"]')
  .trigger('mouseover')
  .within(() => {
    cy.get('[data-cy="app-card-menu-icon"]')
      .click({ force: true });
  });
  
  cy.get('[data-cy="rename-app-card-option"]')
  .should('be.visible')
  .click();

  cy.get('[data-cy="app-name-input"]')
    .should('be.visible')
    .type('RithishRename');
  
    cy.contains('button', 'Rename app').should('not.be.disabled').click();

  });
});
