/// <reference types="cypress" />



it('Intercept requests', () => {


    cy //rather than setting a wait time, we can tell cypress to wait for a server response
        .intercept({
            method: 'get',
            url: '/api/boards'
        }) .as('boardList')


    cy
      .visit('http://localhost:3000/')

    cy
        .wait('@boardList')
        .its('response.statusCode')
        .should('eq', 200)

      
    cy
      .get('[data-cy=board-item]')
      .should('have.length', 0)
  
  });