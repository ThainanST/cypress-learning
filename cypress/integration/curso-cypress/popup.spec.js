/// <reference types="cypress"/>

describe('Work popups', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Deve testar o popup diretamente', () => {

        cy.visit('https://wcaquino.me/cypress/frame.html');   
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
        cy.get('#otherButton').click()
        
    });

    it('Deve verificar se o popup foi envocado', () => {

        cy.window()
            .then( win => {
                cy.stub(win, 'open').as('winOpen')
                // Não vai abri mais o popup, por conta do stub
            })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen')
            .should('be.called')
    });
    
    describe.only('With links...', () => {
        beforeEach( () => {
            cy.visit('https://wcaquino.me/cypress/componentes.html');
        })
    
        beforeEach( () => {
            cy.reload();
        })

        it('Check popup url', () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal','https://wcaquino.me/cypress/frame.html')
        })

        it('Check accsses popup dynamically', () => {
            cy.contains('Popup2')
                .then($a => {
                    const href = $a.prop('href')
                    cy.visit(href)
                    cy.get('#tfield').type('Funciona!')
                })
        })

        it('should force link on same page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield').type('Funciona!')
        })
    })

})
