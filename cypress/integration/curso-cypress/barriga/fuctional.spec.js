/// <reference types="cypress"/>

describe('Should test at functional level', () => {

    before( () => {
        cy.visit('https://barrigareact.wcaquino.me/');
        
        cy.get('.input-group > .form-control').type('kratos.aquiles@odisseia.com')
        cy.get(':nth-child(2) > .form-control').type('123456')
    
        cy.get('.btn').click()
    
        cy.get('.toast-message').should('contain', 'Bem vindo')
    })

    it.skip('Should creat an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test=nome]').type('Conta de teste')
        cy.get('.btn').click()

        cy.get('.toast-message').should('contain', 'inserida com sucesso')
    });

    it.skip('Should update an account', () => {
        cy.get('[data-test=menu-settings]').click()
        cy.get('[href="/contas"]').click()
        cy.xpath("//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']").click()
        cy.get('[data-test=nome]')
            .clear()
            .type('Conta alterada')

        cy.get('.btn').click()

        cy.get('.toast-message').should('contain', 'atualizada com sucesso')
    });

})