
import loc from './locators'

Cypress.Commands.add('eidroAccessMenuAccount', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.ACCOUNTS).click()    
})

Cypress.Commands.add('eidroInsertAccount', (accountName) => {
    cy.get(loc.ACCOUNTS.NAME).type(accountName)
    cy.get(loc.ACCOUNTS.BTN_SAVE).click()   
})






