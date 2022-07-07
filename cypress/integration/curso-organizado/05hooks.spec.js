
/// <reference types="cypress"/>

describe('Trabalhando com elementos básicos', () => {
    
    // Executa antes de todos
    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    // Executa antes de qualquer teste
    beforeEach( () => {
        // Refresh na página
        cy.reload();
    })

    it('Testes com texto', () => {

        // Locators:  não muito específicos
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')

        // Selector Playground: Cuidado onde clica, muitas armadilhas...
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });
    
    it('Testes com links 1', () => {
        // Selector Playground: Voltar no final da página
        cy.get('[href="#"]').click();
        // Selector Playground: Status não cadastrado
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

    it('Testes com links 2', () => {
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!')
    });
    
})