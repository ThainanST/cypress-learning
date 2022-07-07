/// <reference types="cypress"/>

describe('Ordem de buca', () => {
    it('Teste 1', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // Texto pela classe
        cy.get('.facilachar')
        
        // input pelo id
        cy.get('#formNome')

        // input pelo id-cy (Melhor forma na refatoração)
        cy.get('[data-cy=dataSobrenome]')

        // botão pelo playground (se perde na refatoração)        
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')

        // Solução xpath
    })
})