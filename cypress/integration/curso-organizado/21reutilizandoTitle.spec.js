/// <reference types="cypress"/>

describe('Explorando o cypress', () => {
    it('Reutilização do título 1', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title()
            .then(  title => {
                console.log(title);
                cy.get('#formNome').type(title);
                cy.wrap(title).should('contain', 'Campo de Treinamento')

            })
    })

    it.only('Reutilização do título 2', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        let syncTitle
        cy.title()
            .then(  title => {
                // console.log(title);
                cy.get('#formNome').type(`${title}{backspace}`);
                syncTitle = title;
            })
            .should('have.value', 'Campo de Treinamento')
        
        // Não funciona, ainda não preencheu
        // cy.get('[data-cy="dataSobrenome"]').type(syncTitle)
        cy.get('[data-cy="dataSobrenome"]')
            .then( $el => {
                // $el.val(syncTitle)
                cy.wrap($el).type(syncTitle)
            })
            .should('have.value', 'Campo de Treinamento')
    })
})