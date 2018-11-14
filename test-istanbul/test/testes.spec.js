const assert = require('assert')

describe('Teste Mocha', () => {
    let condition = 'valid'

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
    })
})