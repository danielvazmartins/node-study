const assert = require('assert')

describe('Teste Mocha', () => {
    let condition = 'valid'

    // Executa uma vez antes de todos os testes
    before(() => {
        //console.log('before')
    })

    // Executa antes de cada teste "it"
    beforeEach(() => {
        //console.log('beforeEach')
    })

    it('Teste 1', () => {
        assert.ok(condition == 'valid')
        assert.equal(condition, 'valid')
    })

    it('Teste 2', () => {
        assert.ok(true)        
    })

    it('Teste 3', () => {
        // Mostra mensagem de erro
        //assert.ok(condition == 'invalid', 'Condition is not valid')
        
        assert.ok(condition == 'valid')
    })

    // Executa depois de cada teste "it"
    afterEach(() => {
        //console.log('afterEach')
    })

    // Executa uma vez depois de todos os testes
    after(() => {
        //console.log('after')
    })
})