describe('Login Test on ToolJet Cypress QA site', () => {
  it('should log in with valid credentials', () => {
    // Visit the site
    cy.visit('https://v3-lts-eetestsystem.tooljet.com/login/cypress-qa?redirectTo=/');

    // Enter username
    cy.get('#email')
      .should('be.visible')
      .type('intern@example.com');

    // Enter password
    cy.get('#password')
      .should('be.visible')
      .type('password');

    // Click Sign In
    cy.contains('button', 'Sign in')
      .should('be.visible')
      .click();

    // You can add assertion to confirm login
    cy.url().should('not.include', '/login'); // adjust based on actual URL change

    cy.title().should('eq', 'Dashboard | ToolJet');

    Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
      });

    cy.contains('h3', 'Rithish')         // Locate the visible title
  .should('be.visible')              // Ensure it's visible
  .parents('[class="homepage-app-card-list-item"]')  // Go to card container
  .trigger('mouseover')             // Hover to reveal buttons
  .within(() => {
    cy.get('[data-cy="app-card-menu-icon"]')  // Now find the edit button inside
      .click({ force: true });
  });
  
  cy.get('[data-cy="rename-app-card-option"]')                         // Look for Rename option in dropdown
  .should('be.visible')
  .click();

  cy.get('[data-cy="app-name-input"]')
    .should('be.visible')
    .type('RithishRename');
  
    cy.contains('button', 'Rename app').should('not.be.disabled').click();

  });
});
