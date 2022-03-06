/// <reference types="cypress" />

beforeEach(() => {
    
  })

  Cypress.Commands.add('addBoard', () => {
    cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');
  })
  
  it('Custom commands', () => {
  
    cy
      .visit('localhost:3000');
  
    cy
        .addBoard
  
  });