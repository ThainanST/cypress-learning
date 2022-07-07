// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('checkButtonAlert', (buttonLocator, messageToCheck) => {
    cy.get(buttonLocator).click()
        
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal(messageToCheck)
        })
})

Cypress.Commands.add('eidroProceedLogin', (userName, password, welComeMessage) => {

    cy.visit('https://barrigareact.wcaquino.me/');
    cy.get(loc.LOGIN.USER).type( userName )
    cy.get(loc.LOGIN.PASSWORD).type(password)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', welComeMessage)
})

Cypress.Commands.add('eidroResetApp', (userName, password, welComeMessage) => {

    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
})