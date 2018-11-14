const assert = require('chai').assert
const expect = require('chai').expect
const should = require('chai').should()

describe('Chai', () => {
    it('Assert', () => {
        assert.ok(true)
    })

    it('Expect', () => {
        expect(true).to.equal(true)
    })

    it('Should', () => {
        let test = true
        test.should.equal(true)
    })
})