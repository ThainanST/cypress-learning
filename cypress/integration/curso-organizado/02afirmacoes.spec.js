it.only('Sintaxe de igualdade', () => {
    // Sintaxe herdada de
    //    Jest is a delightful JavaScript Testing Framework (https://jestjs.io/)
    const a = 1;
    expect(a).equal(1);
    expect(a, 'Ops, deveria ser 1 (um)!').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})

it('Sintaxe de teste lógico', () => {
    const a = true;
    const b = null;
    let c
    expect(a).to.be.true
    expect(true).to.be.true
    expect(b).to.be.null
    expect(a).to.be.not.null
    expect(c).to.be.undefined
})


it('Igualdade em objetos', () => {
    const obj = {
        a: 1,
        b: 2
    }
    
    // Alternativas
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.equal(obj);

    // Outro objeto
    expect(obj).not.to.be.equal({a:1, b:2}) // Vai dar errado!
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property('a')
    expect(obj).to.have.property('a',  1)
    expect(obj).to.not.be.empty
    
    // Objeto vazio
    const obj2 = {}
    expect(obj2).to.be.empty
})

it('Igualdade em arrays', () => {
    const arr = [1,2,3];
    const arr2 = [];

    expect(arr).to.have.members([1,2,3]);
    expect(arr).to.include.members([1,3]);
    expect(arr).to.not.be.empty;
    expect(arr2).to.be.empty

})

it('Testes em tipos de variáveis', () => {
    const num = 1;
    const str = 'String';
    const obj = {};
    const arr = [];

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect(obj).to.be.a('object');
    expect(arr).to.be.a('array');
    expect(arr).to.be.an('array');
})

it('Testes em string', () => {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste');
    expect(str).to.have.length(15);
    expect(str).to.contains('de');
    expect(str).to.match(/de/)       // rejects?
    expect(str).to.match(/String/)   // Deve possuir
    expect(str).to.match(/^String/)  // Deve começar
    expect(str).to.match(/teste$/)   // Deve finalizar
    expect(str).to.match(/.{15}/)    // Deve ter tamanho
    expect(str).to.match(/\w+/)      // Deve ter apenas palavras
    expect(str).to.match(/\D+/)      // Deve não conter numeros
})

it('Testes em números', () => {
    const number = 4
    const numberFloat = 5.2123

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3);
    expect(number).to.be.below(7);
    expect(numberFloat).to.be.equal(5.2123);
    expect(numberFloat).to.be.closeTo(5.2, 0.1);
    expect(numberFloat).to.be.above(5);
})


it('nome do teste', () => {
    // descreve o teste
})