/// <reference types="cypress"/>

describe('Locators', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Ordem de busca', () => {

        // Cypress usa uma estratégia para a busca
        // id, name, class, etc
        // https://docs.cypress.io/guides/core-concepts/test-runner#Uniqueness
        // data-cy
        // data-test
        // data-testid
    });

    it('Using jQuery selector', () => {

        // "https://www.w3schools.com/jquery/jquery_ref_selectors.asp"

        // Pelo cypress
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')

        // pela busca manual - encontrou mais de um elemento
        cy.get('table#tabelaUsuarios tbody > tr td:nth-child(3) > input')

        // pela busca manual - por elementos de tabela
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input')

        // por atributo
        cy.get("[onclick*='Francisco']")  // contem 'Francisco'

        // por tabela
        cy.get("table#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")

        // por tabela
        cy.get("table#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) > input")
    });

    it('Using xpath - contenha algo', () => {
        cy.xpath("//input[contains(@onclick, 'Francisco')]").click()
    });

    it('Using xpath - contenha algo e tenha tipo', () => {
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/following-sibling::td/input[@type='button']").click()
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(.,'Francisco')]/..//input[@type='text']").type('Funcionou!')
    });

    it.only('Using xpath - mimca da lógica ou', () => {
        cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']").type('Funcionou!')
    })
})
