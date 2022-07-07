/// <reference types="cypress"/>

describe('Dynamic Tests', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    describe.only('Testes dinâmicos 1 - comida variada', () => {
        const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
        foods.forEach( food => {
            it(`Cadastro com ${food}`, () => {
            
                cy.get('#formNome').type('Usuario')
                cy.get('#formSobrenome').type('Qualquer')
                cy.get(`[name=formSexo][value=F`).click()
                cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click()
                cy.get('#formEscolaridade').select('Doutorado')
                cy.get('#formEsportes').select('Corrida')
                cy.get('#formCadastrar').click()
                cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!') 
            });
        })
    })

    describe('Testes dinâmicos 2 - seleções', () => {
        
        it('Deve selecionar todos usando mutiple', () => {
                
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F`).click()
    
            cy.get('[name=formComidaFavorita]').click({multiple:true})
    
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
    
            cy.checkButtonAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    
        });
    
        it('Deve selecionar todos usando each', () => {
                
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get(`[name=formSexo][value=F`).click()
    
            cy.get('[name=formComidaFavorita]')
                .each( $el => {
                    if( $el.val() != 'vegetariano' )
                    cy.wrap($el).click()
                })
    
            cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
    
            // cy.checkButtonAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        });
    })


})
