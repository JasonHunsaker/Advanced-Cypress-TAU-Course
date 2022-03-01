/// <reference types="cypress" />

beforeEach(() => {

    cy
      .visit('/board/42257192965')
  })
  
  it('Multiple assertions', () => {
  
    cy
      .get('[data-cy=task]')   //then does not contain retry logic - no 4 second "wait" period - would need to be a .should instead
      .then(item => {
        if (item.length !== 3) {
          throw new Error('Not enough elements!')
        }                              
        expect(item[0]).to.contain.text('tasks')
        expect(item[1]).to.contain.text('Milk')
      })
  
  })