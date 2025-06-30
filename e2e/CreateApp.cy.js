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

    cy.contains('button', 'Create an app')
      .should('be.visible')
      .click();

    Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
      });

    cy.get('form[id="createAppForm"]', { timeout: 10000 }).should('be.visible'); 



    cy.get('[data-cy="app-name-input"]')
    .should('be.visible')
    .type('Rithish');
  
    cy.contains('button', 'Create app').should('not.be.disabled').click();
  
    cy.title().should('eq', 'Rithish | ToolJet');

  });
});