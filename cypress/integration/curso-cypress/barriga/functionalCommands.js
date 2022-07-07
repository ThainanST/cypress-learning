/// <reference types="cypress"/>

import loc from '../../../support/locators'
import '../../../support/commandsContas'

describe('Should test at functional level', () => {

    before( () => {

        const userName = 'kratos.aquiles@odisseia.com'
        const password = '123456'
        const welComeMessage = 'Bem vindo'
        cy.eidroProceedLogin(userName, password, welComeMessage)
        cy.eidroResetApp()
    })

    it('Should creat an account', () => {
        cy.eidroAccessMenuAccount()
        cy.eidroInsertAccount('Conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'inserida com sucesso')
    });

    it('Should update an account', () => {
        cy.eidroAccessMenuAccount()
        cy.xpath(loc.ACCOUNTS.XP_BTN_UPDATE).click()
        cy.get(loc.ACCOUNTS.NAME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'atualizada com sucesso')
    });

    it('Should not create an account with the same name', () => {
        cy.eidroAccessMenuAccount()

        cy.get(loc.ACCOUNTS.NAME).type('Conta alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()

        cy.get(loc.MESSAGE).should('contain', 'code 400')

       });

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta alterada')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)

        cy.xpath(loc.EXTRATO.XP_BUSCA_ELEMENTO).should('exist')
    });

    it('Should get a balance', () => {
        cy.get(loc.MENU.HOME).click()
        console.log()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada'))
           .should('contain', '123,00')

    });

    it('Should remove a transaction', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Desc')).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
    })

})