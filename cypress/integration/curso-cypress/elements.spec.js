/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')

        cy.get('span').should('contain', 'Cuidado')

        cy.get('.facilAchar').should('contain', 'Cuidado')

        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it('Links', () => {

        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload();
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click();
        cy.get('#resultado').should('have.text', 'Voltou!')

    });

    it('TextFields', () => {

        // have.text não funciona para texto digitado
        cy.get('#formNome')
            .type('Cypress test')
            .should('have.value', 'Cypress test')


        // Problemas na interpretação devido aos :
        // cy.get('#elementosForm\:sugestoes')
        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')
        
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
            .should('have.value', '???')
        
        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('erro{selectall}acerto', { delay: 100})
            .should('have.value', 'acerto')
    });

        // {{}	Types the literal { key
        // {backspace}	Deletes character to the left of the cursor
        // {del}	Deletes character to the right of the cursor
        // {downarrow}	Moves cursor down
        // {end}	Moves cursor to the end of the line
        // {enter}	Types the Enter key
        // {esc}	Types the Escape key
        // {home}	Moves cursor to the start of the line
        // {insert}	Inserts character to the right of the cursor
        // {leftarrow}	Moves cursor left
        // {movetoend}	Moves cursor to end of typeable element
        // {movetostart}	Moves cursor to the start of typeable element
        // {pagedown}	Scrolls down
        // {pageup}	Scrolls up
        // {rightarrow}	Moves cursor right
        // {selectall}	Selects all text by creating a selection range
        // {uparrow}	Moves cursor up
        // {alt}	Activates the altKey modifier. Aliases: {option}
        // {ctrl}	Activates the ctrlKey modifier. Aliases: {control}
        // {meta}	Activates the metaKey modifier. Aliases: {command}, {cmd}
        // {shift}	Activates the shiftKey modifier.
    
    it('RadioButton', () => {
        cy.get('#formSexoFem') // # indica id
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        
        cy.get("[name=formSexo]")
            .should('have.length', 2)
    });

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        
        cy.get('[name=formComidaFavorita]')
            .click({multiple:true})

        cy.get('#formComidaPizza')
            .should('not.be.checked')

        cy.get('#formComidaVegetariana')
            .should('be.checked')
    });

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
        
        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        // Ou seja
        //    para o select, pode ser o valo visível/value
        //    para o should, deve ser o value

        // TODO validar as opções do combo
    });

    it('Combo munltiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada']) // Tem que mandar o value

            // TODO validar opções selecionadas do combo múltiplo
    });


    it('Combo 3', () => {
        // Olhe o html, busque option no palyground

        // Afirmação 1
        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)

        // Afirmação 2
        cy.get('[data-test="dataEscolaridade"] option')
            .then($arr => {
                const values = []
                $arr.each( function() {
                    values.push(this.innerHTML)

                }) 
                // fora do contexto do cypress
                expect(values).to.include.members(["Superior","Mestrado"])

                // Dentro do contexto do cypress
                cy.wrap(values).should('include.members', ["Superior","Mestrado"])
            })
    });

    it('Combo multiplo 2', () => {

        const opc = ['natacao', 'Corrida', 'nada'];

        // Seleção das opções
        cy.get('[data-testid="dataEsportes"]')
            .select(opc) 
            // Tem que mandar o value,  não o texto visível
        
        // Afirmação 1 - usando have.value
        // cy.get('[data-testid="dataEsportes"]')
        //     .should('have.value', opc) // Não funciona! (deep.equal)

        // Afirmação 2 - usando promise
        cy.get('[data-testid="dataEsportes"]')
            .then( $el => {
                // Fora do contexto cypress
                expect($el.val()).to.be.deep.equal( opc )
                expect($el.val()).to.have.length(3)           
            })
            

            // TODO validar opções selecionadas do combo múltiplo
    });

    it.only('Combo multiplo 4', () => {

        const opc = ['natacao', 'Corrida', 'nada'];

        // Seleção das opções
        cy.get('[data-testid="dataEsportes"]')
            .select(opc) 
            // Tem que mandar o value,  não o texto visível

        // Afirmação 1
        cy.get('[data-testid="dataEsportes"]')
            .invoke('val')
            .should('eql', opc)
            

            // TODO validar opções selecionadas do combo múltiplo
    });
})
