/// <reference types="cypress"/>

describe('Hepers', () => {

    // before( () => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html');
    // })

    beforeEach( () => {
        cy.reload();
    })

    it('Wrap 1', () => {
        const obj = {nome: 'User', idade: 20};

        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#formNome')
            .then(  $el => {
                // $el.val('Funciona via jquery')
                cy.wrap($el).type('Funciona?')
            })
    });

    it('Wrap 2', () => {
        
        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        const promise = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple')
            .then( () => console.log('Encontrei 1') )

        // promise.then( num => console.log(num))
        cy.wrap(promise).then( num => console.log(num))
        cy.get('#buttonList')
            .then( () => console.log('Encontrei 2') )
    });

    it('Wrap 3', () => {

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
    });

    it('Wrap 4', () => {

        // should ignora o return
        cy.wrap(1).should(num => {
            return 2
        }).should('not.be.equal', 2)
    });


    it('Its... 1', () => {

        const obj = {nome: 'User', idade: 20};
        cy.wrap(obj).should('have.property', 'nome', 'User')

        cy.wrap(obj).its('nome').should('be.equal', 'User')
    });

    it('Its... 2', () => {

        const obj = {
            nome: 'User',
            idade: 20,
            endereco: {
                rua: 'dos bobos',
                numero: 'zero'
            }
        };

        // Afirmação  1
        cy.wrap(obj)
            .its('endereco')
            .should('have.property', 'rua')

        // Afirmação  2
        cy.wrap(obj)
            .its('endereco')
            .its('rua')
            .should('contain', 'bobos')

        // Afirmação  3
        cy.wrap(obj)
            .its('endereco.rua')
            .should('contain', 'bobos')
    });

    it('Its... 3', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        // Afirmação 1
        cy.title()
            .its('length')
            .should('be.equal', 20)
    });

    it('Invoke... 1', () => {

        const getValue = () => 1;

        cy.wrap( {fn: getValue} )
            .invoke('fn')
            .should('be.equal', 1)
    });

    it('Invoke... 2', () => {

        const soma = (a,b) => a+b;

        cy.wrap( {fn: soma} )
            .invoke('fn', 2, 5)
            .should('be.equal', 7)
    });

    it('Invoke... 3', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#formNome')
            .invoke('val', 'Texto via invoke')
    });

    it('Invoke... 4', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.window().invoke('alert', 'Dá pra ver?')
    });

    it.only('Invoke... 5', () => {

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('#resultado')
            .invoke('html', '<input type="button", value="hacked!"/>')
    });


})
