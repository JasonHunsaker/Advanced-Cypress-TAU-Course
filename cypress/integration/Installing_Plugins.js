/// <reference types="cypress" />

it('Installing plugins', () => {

    cy
      .visit('localhost:3000');

      cy.eyesOpen({
        appName: ' Trello app',
        testName: 'trying out applitools plugin!',
        browser: { width: 800, height: 600 },
      });
      cy.eyesCheckWindow('Board List');
      
      cy.eyesClose();
    
  });