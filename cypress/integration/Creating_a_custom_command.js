/// <reference types="cypress" />



 Cypress.Commands.add('take', (input) => {
     cy
        .get(`[data-cy=${input}]`)
 })
  
  it('Custom commands', () => {
  
    cy
      .visit('http://localhost:3000/board/46846657518');
  
    cy
        .get()
        .take('task')
  
  });