const assert = require('assert')
const Calc = require('../src/calc.class')

describe('Test Calc Class', () => {
    before(() => {
        calc = new Calc()
        x = 2
        y = 3
    })
    it('Somar', () => {
        let result = calc.somar(x, y)
        assert.equal(result, 5)
    })
    it('Subtrair', () => {
        let result = calc.subtrair(x, y)
        assert.ok(result < 0)
    })
    it('Multiplicar', () => {
        let result = calc.multiplicar(x, y)
        assert.equal(result, 6)
    })
    it('Dividir', () => {
        let result = calc.dividir(x, y)
        assert.ok(result > 0)
    })
})