/// <reference types="cypress" />

beforeEach(() => {
    
  })

  Cypress.Commands.add('addBoard', (input) => {
    cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type(input + '{enter}');
  })
  
  it('Custom commands', () => {
  
    cy
      .visit('localhost:3000');
  
    cy
        .addBoard('todo')
  
  });