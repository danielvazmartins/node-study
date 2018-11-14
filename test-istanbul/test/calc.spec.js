const soma = require('../src/calc')
const assert = require('assert')

describe('Teste calc', () => {
    it('Teste soma', () => {
        assert.ok(soma(2,3), 5)
    })
})