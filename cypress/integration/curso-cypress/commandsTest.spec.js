/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Alert 1 - Tratamento usual', () => {
        
        cy.get('#alert').click()
        
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    });

    it('Alert 1 - Tratamento com comando personalizado', () => {
        
        cy.checkButtonAlert('#alert', 'Alert Simples')
        
    });

})
