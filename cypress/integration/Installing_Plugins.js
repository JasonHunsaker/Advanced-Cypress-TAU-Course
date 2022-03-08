/// <reference types="cypress" />

it('Installing plugins', () => {

    cy
      .visit('localhost:3000/board/46846657518');

    cy
      .get('[data-cy=task]')
      .eq(0)
      .as('Task 2')
  
      .get('[data-cy=task]')
      .eq(1)
      .as('Task 1')

      .get('@Task 2')
      .drag('@Task 1')

    
  });