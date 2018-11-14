describe('Teste Jasmine', () => {

    // Executa antes de cada teste "it"
    beforeEach(() => {
        //console.log('beforeEach')
    })

    it('Teste 1', () => {
        //console.log('Teste 1')
        expect(true).toBe(true)
    })

    it('Teste 2', () => {
        //console.log('Teste 2')
        expect(true).not.toBe(false)
    })

    it('Teste 3', () => {
        //console.log('Teste 3')
        expect(true).toEqual(true)
    })

    // Executa depois de cada teste "it"
    afterEach(() => {
        //console.log('afterEach')
    })
})