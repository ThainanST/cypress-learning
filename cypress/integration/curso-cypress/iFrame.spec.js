/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Deve preencher campo de texto 1', () => {
        
        cy.get('#frame1')
            .then( iFramObj => {
                const bodyObj = iFramObj.contents().find('body');
                cy.wrap(bodyObj)
                    .find('#tfield')
                    .type('Funciona?')
                    .should('have.value', 'Funciona?')
                //
                cy.on('window:alert', msg => {
                    expect(msg).to.be.equal('Alert Simples')
                })
                cy.wrap(bodyObj)
                    .find('#otherButton').click()
            })
    });
    
    it.only('Deve preencher campo de texto 1', () => {

        cy.visit('https://wcaquino.me/cypress/frame.html');   

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })

        cy.get('#otherButton').click()
        
    });

})
