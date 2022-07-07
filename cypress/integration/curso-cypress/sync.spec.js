/// <reference types="cypress"/>

describe('Esperas...', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Deve aguardar elemento estar disponivel', () => {
        
        cy.get('#novoCampo').should('not.exist')
        
        cy.get('#buttonDelay').click()

        cy.get('#novoCampo').type('Funciona')
    });

    it('Deve fazer retry', () => {
        
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')        

        // // O cypress encara o get como único objeto
        // // ele tenta checar várias vezes tudo que está no get
        // // se tiver uma espera, cuidado para não encadear o que não deve
        // cy.get('#novoCampo')
        //     .should('not.exist')
        //     .should('exist')
    });


    it('Uso do find', () => {
        cy.get('#buttonList').click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span') // neste caso, ele repete o get várias vezes
            .should('contain', 'Item 2')

        // Outros jeitos de buscar    
        // cy.get('#lista > :nth-child(1) > span')
        // cy.get('#lista > :nth-child(2) > span')

        // Busca:
        // para achar tags, não é necessário carcater especial
        // para achar id é necessário usar #

        // Estratégia de retry
        // O cypress fica retentando comando-assertiva
        // dependendo do encadeamento, pode ocorrer erro
    });

    it('Uso do find 2', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span') // neste caso, ele repete o get várias vezes
            .should('contain', 'Item 2')
    });

    it('Uso do timeout 1', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo', {timeout: 1000}).should('exist')
        // Se a condição for satisfeita antes, ele libera o fluxo

        // Comando de espera diferente de 4s
        // no cypress.json
        // "defaultCommandTimeout": 1000
    });

    it('Uso do timeout 2', () => {
        cy.get('#buttonListDOM').click()
        
        cy.wait(5000) // tempo fixo não é uma boa
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    });

    it('Uso do timeout 2', () => {
        cy.get('#buttonListDOM').click()
        
        cy.get('#lista li span', {timeout: 30000})
            .should('have.length', 2)

    });

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    });

    it('Should vs Then 1', () => {
        cy.get('#buttonListDOM')
            .should( $el => {
                // Aqui não é mais elemento cy
                // console.log($el)
                expect($el).to.have.length(1)
                return 2
            }).and('have.id', 'buttonListDOM')
        //.debug() // olhar console
        // get-should => são rodados diversas vezes
        //    should retorna sempre o objeto 
        // get-then => rodados apenas uma vez
        //     then retorna o que vc mandar
    });

    it('Should vs Then 2', () => {
        cy.get('#buttonListDOM')
            .then( $el => {
                // Aqui não é mais elemento cy
                console.log($el)
                expect($el).to.have.length(1)
                return 2
            }).and('eq', 2)
        //.debug() // olhar console
        // get-then => rodados apenas uma vez
        //     then retorna o que vc mandar
    });

    it.only('Should vs Then 3', () => {
        cy.get('#buttonListDOM')
            .then( $el => {
                expect($el).to.have.length(1)
                cy.get('#buttonList')
            })
        // 
    });

    it('Should vs Then 4', () => {
        // Não fazer, ele fica maluco
        // cy.get('#buttonListDOM')
        //     .should( $el => {
        //         expect($el).to.have.length(1)
        //         cy.get('#buttonList')
        //     })
        // // 
    });

    // it('', () => {

    // });
    // it('', () => {

    // });

})
