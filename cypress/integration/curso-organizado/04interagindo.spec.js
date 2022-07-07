/// <reference types="cypress"/>

describe('Basico do cypress', () => {
    it('Visita uma página e verifica o título', () => {

        // Visita uma página
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // Alternativa 1 - Separado
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        
        // Alternativa 2 - Usando should
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')
        
        // Alternativa 3 - usando should & and
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
        
    })
    it('Encontrar e interagir com componente', () => {
        
        // Visita a página
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // Encontra elemento e clica
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });
})