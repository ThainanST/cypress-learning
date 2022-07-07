/// <reference types="cypress"/>

describe('Dynamic Tests', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })
    
    it('Testando data', () => {
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '20/12/2021')
    });

    it('Testando data - clock', () => {
        cy.clock()

        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/12/1969')
    });

    it('Testando data - setando data', () => {

        const dt = new Date(2020, 12, 31,  15, 59, 59)
        cy.clock(dt.getTime() )

        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/01/2021')
    });

    it.only('Testando data - funcionamento clock', () => {

        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gt', 1612115999000)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        // cy.wait(1000)
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('lte', 1000)

        cy.tick(5000) // aumenta o tempo
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 1000)


    });
})
