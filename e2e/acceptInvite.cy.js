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

   
    
    
  


//   cy.get('[data-testid="usersTable"]')
//   .contains('td', randomEmail)
//   .parents('tr')
//   .within(() => {
//     cy.get('td')
//       .eq(4) // assuming 5th column is "Status"
//       .should('contain.text', 'Invited'); // or 'Inactive' if that's what the status reads
//   });

     cy.contains('Copy link')
      .first()
      .click({force : true});
    // Wait a moment for clipboard to be updated
    cy.wait(500);

    

// Then press Enter
    cy.focused().type('{enter}');
    // Access clipboard content - requires browser support
    cy.window().then((win) => {
      // Clipboard API: readText()
      return win.navigator.clipboard.readText();
    }).then((clipboardText) => {
      // Log and visit the copied URL
      cy.log('Copied URL from clipboard:', clipboardText);
      // Assert URL is non-empty and valid-like before visiting
      // expect(clipboardText).to.match(/^https?:\/\//);
      // Visit the copied URL in the same browser tab
      cy.visit(clipboardText);
    }); 


  });

});