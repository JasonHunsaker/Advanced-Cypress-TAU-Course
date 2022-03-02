/// <reference types="cypress" />

beforeEach(() => {
    
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/reset'
    })
})


it('sending requests', () => {
    cy
        .visit('http://localhost:3000/')

    cy  
        // .request({
        //     method: 'POST',
        //     url: '/api/boards',
        //     body: {
        //         name: 'board created by .request() command'
        //     }
        // })

    // cy  
    //     .request({
    //         method: 'PATCH',
    //         url: '/api/boards/49999059233',
    //         body: {
    //             name: 'board edited by .request() command'
    //         }
    //     })

        // cy  
        // .request({
        //     method: 'DELETE',
        //     url: '/api/boards/49999059233',
            
        //     })
        
})