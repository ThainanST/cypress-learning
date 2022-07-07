/// <reference types="cypress"/>

describe('Alguns testes com elementos básicos', () => {
    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })
    beforeEach( () => {
        cy.reload();
    })
    it('Campo de texto 1', () => {
        cy.get('#formNome')
            .type('Cypress test')
            .should('have.value', 'Cypress test')
            .should('not.have.text', 'Cypress test') // have.text não funciona para texto digitado

    });

    it.only('Campo de texto 1', () => {
        // Problemas na interpretação devido aos :
        // cy.get('#elementosForm\:sugestoes')
        cy.get('#elementosForm\\:sugestoes')
            .type('Meu texto para testar')
            .should('have.value', 'Meu texto para testar')
        
    });

    it('Campo de texto 3', () => {
        // Exemplo de péssimo selector
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Meu texto para testar')
            .should('have.value', 'Meu texto para testar')
        
    });

    it('Campo de texto 4', () => {
        // Exemplo de ótimo selector, feito para o teste
        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')
        
    });

    it('Campo de texto 5', () => {
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('erro{selectall}acerto', { delay: 100})
            .should('have.value', 'acerto')
        
    });

    // {{}  Types the literal { key
    // {backspace}  Deletes character to the left of the cursor
    // {del}    Deletes character to the right of the cursor
    // {downarrow}  Moves cursor down
    // {end}    Moves cursor to the end of the line
    // {enter}  Types the Enter key
    // {esc}    Types the Escape key
    // {home}   Moves cursor to the start of the line
    // {insert} Inserts character to the right of the cursor
    // {leftarrow}  Moves cursor left
    // {movetoend}  Moves cursor to end of typeable element
    // {movetostart}    Moves cursor to the start of typeable element
    // {pagedown}   Scrolls down
    // {pageup} Scrolls up
    // {rightarrow} Moves cursor right
    // {selectall}  Selects all text by creating a selection range
    // {uparrow}    Moves cursor up
    // {alt}    Activates the altKey modifier. Aliases: {option}
    // {ctrl}   Activates the ctrlKey modifier. Aliases: {control}
    // {meta}   Activates the metaKey modifier. Aliases: {command}, {cmd}
    // {shift}  Activates the shiftKey modifier.
})
