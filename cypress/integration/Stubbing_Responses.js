/// <reference types="cypress" />

it('Stubbing response', () => {

    cy
      .intercept({
        method: 'GET',
        url: '/api/boards'       //we can also put a function here
      }, (req) => {  
            
        req.reply( (res) => {
           res.body[0].starred = true

           return res
        })
          
      }).as('boardList')  
  


    // cy
    // .intercept({
    //         method: 'POST',
    //         url: '/api/boards'
    //       }, {
    //           forceNetworkError: true //we can also do other testing of issues with cypress, like having a network error
    //       }).as('boardList')
    cy
      .visit('localhost:3000')

    // cy  
    //     .get('[data-cy=create-board]')
    //     .click()
    
    //     .get('[data-cy=new-board-input]')
    //     .type('new board{enter}')

    //     .get('#errorMessage')
    //     .should('be.visible')
          
  });