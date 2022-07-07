
describe('My first set of tests', function () {

    it('My fist test', function () { 
        expect(true).to.equal(false)
        // Arrange - setup initial app state (Mocha/Chain) Mockup
        // 	- Visit a web page
        // 	- Query for na element
            
        // Act - take na action
        // 	- Interact with that element 
            
        // Assert - make na assertion
        // Make na assertion about page content
    })


    it('Visit the kitchen sink', function () { 
        cy.visit('https://example.cypress.io')
    })

    it('Finds an element', function () { 
        cy.visit('https://example.cypress.io')

        // Funtions in cypress have internal assertions
        cy.contains('type')
    })

    it('Makes an assertion', function () { 
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include','/commands/actions')
    })

    it('Gets, types, asserts', function () { 
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include','/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value','fake@email.com')
    })

})