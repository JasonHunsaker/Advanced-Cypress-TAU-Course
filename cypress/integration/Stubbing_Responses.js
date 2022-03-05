/// <reference types="cypress" />

it('Stubbing response', () => {

    // cy
    //   .intercept({
    //     method: 'GET',
    //     url: '/api/boards'
    //   }, {
    //       fixture: 'threeBoards' //this replaces the array on the server with what we put here - it could be empty 'Body:[]', or we can use our own values
    //   }).as('boardList')  
  


    cy
    .intercept({
            method: 'POST',
            url: '/api/boards'
          }, {
              forceNetworkError: true //we can also do other testing of issues with cypress, like having a network error
          }).as('boardList')
    cy
      .visit('localhost:3000')

    cy  
        .get('[data-cy=create-board]')
        .click()
    
        .get('[data-cy=new-board-input]')
        .type('new board{enter}')

        .get('#errorMessage')
        .should('be.visible')
          
  });