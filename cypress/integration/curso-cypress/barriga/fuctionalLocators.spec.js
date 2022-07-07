/// <reference types="cypress"/>

import loc from '../../../support/locators'

describe('Should test at functional level', () => {

    before( () => {

        cy.fixture('loginData').as('user')
            .then( function () {
                const welComeMessage = 'Bem vindo'
                cy.eidroProceedLogin(this.user.login, this.user.password, welComeMessage)
            })
        cy.eidroResetApp()
    })

    it('Should creat an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNTS).click()
        cy.get(loc.ACCOUNTS.NAME).type('Conta de teste')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'inserida com sucesso')
    });

    it('Should update an account', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.ACCOUNTS).click()
        cy.xpath(loc.ACCOUNTS.XP_BTN_UPDATE).click()
        cy.get(loc.ACCOUNTS.NAME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.ACCOUNTS.BTN_SAVE).click()
        cy.get(loc.MESSAGE).should('contain', 'atualizada com sucesso')
    });

})