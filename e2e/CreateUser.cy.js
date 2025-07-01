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
    
    
  const randomEmail = `Rithish${Date.now()}@gmail.com`;
  
  cy.get('[data-cy="input-field-email"]')
  .should('be.visible')
  .type(randomEmail);
  
  cy.get('[data-cy="button-invite-users"]')
  .should('be.visible')
  .click();


//   cy.get('[data-testid="usersTable"]')
//   .contains('td', randomEmail)
//   .parents('tr')
//   .within(() => {
//     cy.get('td')
//       .eq(4) // assuming 5th column is "Status"
//       .should('contain.text', 'Invited'); // or 'Inactive' if that's what the status reads
//   });

    cy.get('[data-testid="usersTable"]')
  .find('tr')
  .contains('td span', randomName) // finds span with email text
  .parents('tr')
  .within(() => {
    cy.get('td small')
    .contains('text','Invited')
    .should('exist');
  });
  });

});