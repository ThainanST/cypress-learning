describe('Cadastro de apartamentos', () => {

    /*
    it('Cadastro administrador', ()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

        cy.visit('/login')

        cy.get('p > .a-click').click()
        cy.get('#email').type('adm_cond_delta@eidro.com')
        cy.get('[name="password"]').type('123456')
        cy.get('[name="passwordConfirmation"]').type('123456')
        cy.get('form > .fadeIn').click()
        cy.get('.close > span').click()
        
    })
    
    it('Cadastro Adiminstrador 2', ()=> {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    
        cy.get('#email').type('adm_cond_delta@eidro.com')
        cy.get('[name="password"]').type('123456')  
        cy.get('#form-login > .fadeIn').click()

        cy.get('#phone-box').type('32988887777')
        cy.get(':nth-child(4) > .form-control').type('Administrador cond. Delta')
        cy.get('#birthdayCalendar').type('1900-07-01')
        cy.get('[style="margin-left: 8px;"] > #button').click()
           
    })

    */
    
    it('Cadastro Condominio', ()=> {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        const emailAdm = 'adm_cond_delta@eidro.com'
        const senhaAdm = '123456'
    
        cy.visit('/login')
        cy.get('#email').type(emailAdm)
        cy.get('[name="password"]').type(senhaAdm)  
        cy.get('#form-login > .fadeIn').click()

        cy.get('#condominiumSelected').select('Condominio Delta')


        cy.get('.close > span').click()
        
        cy.get(':nth-child(3) > :nth-child(2) > .bmd-form-group > .form-control').type(emailAdm)
  
    })
               

})