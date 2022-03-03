/// <reference types="cypress" />

//this test combines a UI & an API test in one

it('Intercept requests', () => {


    cy //rather than setting a wait time, we can tell cypress to wait for a server response
        .intercept({
            method: 'POST',
            url: '/api/boards'
        }) .as('createBoard')


    cy
      .visit('http://localhost:3000/')

    cy 
        .get('[data-cy=create-board')
        .click()

    cy  
        .get('[data-cy=new-board-input]')
        .type('Launching a career{enter}')

    cy
        .wait('@createBoard')
        .then( (board) => {
            expect(board.response.statusCode).to.eq(201)
            expect(board.request.body.name).to.eq('Launching a career')
        })
        
      
    
  
  });