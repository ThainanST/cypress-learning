/// <reference types="cypress"/>


describe('Cypress Basic', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // const title = cy.title()
        // console.log(title) // promise

        // cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
        // cy.title().should('contain', 'Campo').debug()
        // cy.title().debug().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        // TODO imprimir o title no console
        // TODO escrever o title no campo de teste
    })

    it('Should visit a page and assert title 2', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
            .then( title => {
                console.log(title)
            })

        cy.title()
        .should( title => {
            console.log(title)
        })
        // TODO imprimir o title no console
        // TODO escrever o title no campo de teste
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        // cy.get('#buttonSimple').click()
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    });

    it('Reutilização do título 1', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
            .then(  title => {
                console.log(title);

                cy.get('#formNome').type(title);
            })
    })

    it('Reutilização do título 2', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        let syncTitle

        cy.title()
            .then(  title => {
                console.log(title);

                cy.get('#formNome').type(title);

                syncTitle = title;
            })

        // Não funciona, ainda não preencheu
        // cy.get('[data-cy="dataSobrenome"]').type(syncTitle)

        cy.get('[data-cy="dataSobrenome"]')
            .then( $el => {
                $el.val(syncTitle)
                cy.wrap($el).type(syncTitle)
            })
    })

    // it('', () => {

    // })
})











