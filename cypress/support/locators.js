const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        HOME: '[data-test=menu-home]',
        SETTINGS: '[data-test=menu-settings]',
        ACCOUNTS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[data-test=menu-movimentacao]',
        EXTRATO: '[data-test=menu-extrato]',
    },
    ACCOUNTS: {
        NAME: '[data-test=nome]',
        BTN_SAVE: '.btn',
        XP_BTN_UPDATE: "//table//td[contains(.,'Conta de teste')]/..//i[@class='far fa-edit']"
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary',
    },
    EXTRATO: {
        LINHAS: ".list-group > li",
        XP_BUSCA_ELEMENTO: "//span[contains(.,'Desc')]/following-sibling::small[contains(.,'123')]", 
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(.,'${conta}')]/../../..//i[@class='far fa-trash-alt']`,
    },
    SALDO:  {
        FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/..//td[2]`,
    },
    MESSAGE: '.toast-message'

}

export default locators;