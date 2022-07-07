// O escopo da função muda se
//   - usar arrow function
//   - usar função convencional

it('a function test', function () {
    console.log('Function', this)
})
// Function Context {_runnable: Test, test: Test}


it('a arrow test', ()=> {
    console.log('Arrow', this)
})
// undefined