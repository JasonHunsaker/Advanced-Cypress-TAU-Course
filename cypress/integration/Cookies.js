/// <reference types="cypress" />

Cypress.Cookies.default({
    preserve: 'trello_token' //can also put this in the index.js file to use across all tests

    //can also use Cypress.Cookies.preserveOnce('trello_token') to only save the cookie for one additional test - we can put it in the "before eack" area to keep the cookies for all the tests
})

describe('Cookies', () => {

    beforeEach(() => {
        
      cy
        .visit('http://localhost:3000/')
  
    })
  
    it.only('test #1', () => {
  
      cy
        //.get('[data-cy="login-menu"]')
        //.click();    instead of these we can set the cookie as if we were already logged in
        .setCookie('trello_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNjQ2MTg3NjU3LCJleHAiOjE2NDYxOTEyNTcsInN1YiI6IjEifQ.R-q1-HjBiRgnV9TuDi7dYAXjILLyFGbRapyS2vfdIBA')
  
      cy
       // .get('[data-cy="login-email"]')
       // .type('filip@example.com'); then we can reload the page with the cookie set
       .reload()

  
      cy
      //  .get('[data-cy="login-password"]')
     //   .type('Asdf.1234#');
  
      cy
        //.get('[data-cy="login"]')
        //.click();
  
      });
  
    it('test #2', () => {
  
    });
  
  });