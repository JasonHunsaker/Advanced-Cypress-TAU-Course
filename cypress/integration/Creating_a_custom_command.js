/// <reference types="cypress" />



 Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) => {

    if (subject) {

        cy
            .wrap(subject)
            .find(`[data-cy=${input}]`)

    } else {
        cy
            .get(`[data-cy=${input}]`)
    }
     
 })
  
  it('Custom commands', () => {
  
    cy
      .visit('http://localhost:3000/board/46846657518');
  
    cy
        .take('list')
        .eq(0)
        .take('task')
  
  });