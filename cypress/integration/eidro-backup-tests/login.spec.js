describe('login tests', () => {

    beforeEach( ()=> {
        cy.viewport(1024, 760)
        cy.visit('/login')
    })

    it('greets with Sign in', ()=> {
        cy.contains('h2', 'AUTENTICAÇÃO')
    })

    it('links to register', ()=> {
        cy
            .contains('Clique aqui')
            .should('have.attr', 'href', '/signup')
    })

    it('requires e-mail', ()=> {
        cy.get('form')
            .contains('Entrar')
            .click()
    })
    
    it('requires password', ()=> {

    })
    
    it('requires valid username and password', ()=> {
        
    })

    it('navigates to successful login', ()=> {
        
    })

    it('a function test', function () {
        console.log('Function', this)
    })
    // Function Context {_runnable: Test, test: Test}

    it('a arrow test', ()=> {
        console.log('Arrow', this)
    })
    // undefined

    const getSomething = () => {
        return new Promise((resolve, reject) => {
            setTimeout( ()=>{
                console.log('answering...')
                resolve(13)
            }, 1000)
        }) 
    }

    const system = async () => {
        console.log('init')
        const some = await getSomething()
        console.log(`Something is ${some}`)
        console.log('end')
    }

    system()

    // it('greets with Sign in', ()=> {

    // // likely want to do this in a support file
    // // so it's applied to all spec files
    // // cypress/support/index.js

    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     // returning false here prevents Cypress from
    //     // failing the test
    //     return false
    // })

    //     cy.visit('/login')
    //     cy.get('#email').click()
    //     cy.get('#email').type('{enter}adm_cond_alpha@eidro.com')
    //     cy.get('#password').type('{enter}123456')

    //     cy.get('#form-login > .fadeIn').click()
    // })

    // expected(true).to.equal(true)

})