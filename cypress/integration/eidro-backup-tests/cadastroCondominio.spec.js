describe('Cadastro de condominio', () => {

    it('autenticacao administrador master', ()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

        cy.visit('/login')
        cy.get('#email').click()
        cy.get('#email').type('{enter}eidro@admin.com')
        cy.get('#password').type('{enter}123456')

        cy.get('#form-login > .fadeIn').click()

        cy.get(':nth-child(2) > .nav-link > .navLinkSpan').click()
        
        
        cy.get('#email').type('{enter}adm_cond_alpha@eidro.com')
        cy.get('#condominiumName').type('{enter}Condominio alpha')
        cy.get('#numberOfApartments').type('{enter}4')
        cy.get('[name="serviceBegin"]').click().type('2021-07-01')

        cy.get('.fourth').click()

        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > .form-control').type('101')    // Apto
        cy.get(':nth-child(4) > :nth-child(3) > :nth-child(2) > .form-control').type('Único')  // Bloco
        cy.get(':nth-child(4) > :nth-child(4) > :nth-child(2) > .form-control').type('0')      // ID pública (do dispositivo)
        cy.get(':nth-child(4) > :nth-child(5) > :nth-child(2) > .form-control').type('0')      // ID medidor

        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .form-control').type('102')    // Apto
        cy.get(':nth-child(5) > :nth-child(3) > :nth-child(2) > .form-control').type('Único')  // Bloco
        cy.get(':nth-child(5) > :nth-child(4) > :nth-child(2) > .form-control').type('0')      // ID pública (do dispositivo)
        cy.get(':nth-child(5) > :nth-child(5) > :nth-child(2) > .form-control').type('1')      // ID medidor

        cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .form-control').type('103')    // Apto
        cy.get(':nth-child(6) > :nth-child(3) > :nth-child(2) > .form-control').type('Único')  // Bloco
        cy.get(':nth-child(6) > :nth-child(4) > :nth-child(2) > .form-control').type('0')      // ID pública (do dispositivo)
        cy.get(':nth-child(6) > :nth-child(5) > :nth-child(2) > .form-control').type('2')      // ID medidor

        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(2) > .form-control').type('104')    // Apto
        cy.get(':nth-child(7) > :nth-child(3) > :nth-child(2) > .form-control').type('Único')  // Bloco
        cy.get(':nth-child(7) > :nth-child(4) > :nth-child(2) > .form-control').type('0')      // ID pública (do dispositivo)
        cy.get(':nth-child(7) > :nth-child(5) > :nth-child(2) > .form-control').type('3')      // ID medidor

        cy.get('#button').click()

        cy.get(':nth-child(4) > .nav-link > .navLinkSpan > .material-icons').click()

    
    })



})