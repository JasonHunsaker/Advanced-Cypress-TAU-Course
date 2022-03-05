/// <reference types="cypress" />

it('Stubbing response', () => {

    cy
      .intercept({
        method: 'GET',
        url: '/api/boards'
      }, {
          body: []
      }).as('boardList')
  
    cy
      .visit('localhost:3000')
  
  });