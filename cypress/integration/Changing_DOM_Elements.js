/// <reference types="cypress" />

beforeEach(() => {

    cy
      .visit('http://localhost:3000');
  
  });
  
  it('Changing the DOM', () => {
  
    cy
      .get('[data-cy="board-item"]')
      .trigger('mouseover')
  
    cy
      .get('[data-cy=star]')
      .should('be.visible')   
  
    cy
      .get('[data-cy="board-item"]')
      .trigger('mouseout')
  
    cy
      .get('[data-cy=star]')
      .should('not.be.visible') 
  
  })