/// <reference types="cypress" />

it('Installing plugins', () => {

    cy
      .visit('localhost:3000/board/46846657518');

    cy
      .get('[data-cy=task]')
      .eq(0)
      .click()

    cy
        .get('.dropzone')
        .attachFile('logo.png', {subjectType: 'drag-n-drop'}) //stored in fixtures folder
    
  });