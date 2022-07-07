/// <reference types="cypress"/>

it('Um teste externo...', () => {
    
});

// Falar de only e skip

describe('Agrupamento de testes...', () => {
    describe('Agrupamento de testes espacíficos 1...', () => {
        it('Um teste interno 1...', () => {
        
        });
        
        it('Um teste interno 2...', () => {
        
        });
    })
    describe('Agrupamento de testes espacíficos 2...', () => {
        it('Um teste interno 1...', () => {
        
        });
        
    })
    describe('Agrupamento de testes espacíficos 3...', () => {
        it('Um teste interno 1...', () => {
        
        });
        
        it('Um teste interno 2...', () => {
        
        });
    })
    it('Um teste interno 1...', () => {
        
    });
    
})