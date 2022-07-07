/// <reference types="cypress"/>

describe('Work with basic elements', () => {

    before( () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    })

    beforeEach( () => {
        cy.reload();
    })

    it('Alert 1 - Tratamento usual', () => {
        
        cy.get('#alert').click()
        
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    });

    it('Alert 2 - Usando mock', () => {
        
        // Cria objeto stub que substitui uma função
        const stubObj = cy.stub().as('alerta');

        // diz que em um evento de alerta, chama-se o stub
        cy.on('window:alert', stubObj)

        // realiza a ação e pega evento
        cy.get('#alert')
            .click()
            .then( () => {
                expect(stubObj.getCall(0)).to.be.calledWith('Alert Simples')
            })
    });

    it('Confirm - Confirm', () => {
        
        // Cadastro da ação 1
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        
        // Cadastro da ação 2
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
        
        // Ação de click
        cy.get('#confirm').click();
    });

    it('Confirm - Deny', () => {
        
        // Cadastro da ação 1
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false;
        })
        
        // Cadastro da ação 2
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Negado')
        })
        
        // Ação de click
        cy.get('#confirm').click();
    });

    it('Prompt', () => {
        
        // Cadastro da ação de prompt
        cy.window()
            .then( win => {
                cy.stub( win, 'prompt')
                    .returns('42')
            })
        
        // Cadastro da ação de alert
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })

        // Cadastro da ação  de confirm
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?');
        })

        // Ação de click
        cy.get('#prompt').click();
    });

    it.only('Dasafio de cadastro', () => {

        const nomeVar        = 'João';
        const SobreNomeVar   = 'das Couves';
        const primeiroAlerta = 'Nome eh obrigatorio';
        const segundoAlerta  = 'Sobrenome eh obrigatorio';
        const terceiroAlerta = 'Sexo eh obrigatorio';

        const stubObj = cy.stub().as('alerta');
        
        cy.on('window:alert', stubObj)

        // Primeiro click
        cy.get('#formCadastrar')
            .click()
            .then( () => {
                expect(stubObj.getCall(0)).to.be.calledWith(primeiroAlerta)
            })

        // segundo click
        cy.get('#formNome')
            .type(nomeVar)
            .should('have.value', nomeVar)
        cy.get('#formCadastrar')
            .click()
            .then( () => {
                expect(stubObj.getCall(1)).to.be.calledWith(segundoAlerta)
            })
        
        // Terceiro click
        cy.get('[data-cy="dataSobrenome"]')
            .type(SobreNomeVar)
            .should('have.value', SobreNomeVar)
        cy.get('#formCadastrar')
            .click()
            .then( () => {
                expect(stubObj.getCall(2)).to.be.calledWith(terceiroAlerta)
            })
        
        // quarto click
        cy.get('#formSexoFem') // # indica id
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        
        cy.get("[name=formSexo]")
            .should('have.length', 2)
        
        cy.get('#formCadastrar')
            .click()
        
        // Mensagem de cadastrado
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!') 

    });

})
