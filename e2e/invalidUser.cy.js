describe('Login Test on ToolJet Cypress QA site', () => {
  it('should log in with valid credentials', () => {
    cy.visit('https://v3-lts-eetestsystem.tooljet.com/qa-automation');

    cy.get('#email')
      .should('be.visible')
      .type('test1@tooljet.com');

    cy.get('#password')
      .should('be.visible')
      .type('password');

    cy.contains('button', 'Sign in')
      .should('be.visible')
      .click();

      Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
      });

    cy.get('[data-cy="settings-icon"]')
    .should('be.visible')
    .click();

    cy.contains('span','Workspace settings')
    .should('be.visible')
    .click();

    cy.get('[data-cy="button-invite-new-user"]')
    .scrollIntoView()
    .should('be.visible')
    .parents('[class=" workspace-setting-buttons-wrap"]')
    .click();

    const randomName = `Rithish${Date.now()}`;

    cy.get('[data-cy="input-field-full-name"]')
    .should('be.visible')
    .type(randomName);
    
    
  const randomEmail = `Rithish${Date.now()}`;
  
  cy.get('[data-cy="input-field-email"]')
  .should('be.visible')
  .type(randomEmail);

  cy.get('[data-cy="error-message-email"]')
  .should('be.visible');
  
   
  });

});