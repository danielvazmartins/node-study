const assert = require('assert')
const sinon = require('sinon')
const nock = require('nock')
const User = require('../src/classes/user')

describe('Assert', () => {
    beforeEach(() => {
        user = new User('User 1', true)
    })
    
    it('Test isValid', () => {
        assert.ok(user.isValid())
    })

    it('Test getExternalUser', (done) => {
        user.getExternalUser((error, response) => {
            assert.equal(response['name'], 'Leanne Graham')
            done()
        })
    })
})

describe('Sinon Stub', () => {
    beforeEach(() => {
        user = new User('User 1', true)
    })
    
    it('Test isValid stub', () => {
        // Retorna um valor fake para um método de uma classe
        let userStub = sinon.stub(user, 'isValid')
        userStub.returns(true)
        assert.ok(user.isValid())

        userStub.returns(false)
        assert.ok(!user.isValid())
    })

    it('Test getName Stub', () => {
        // Retorna um valor fake para um método de uma classe
        let nameStub = 'User 2'
        sinon.stub(user, 'getName')
        .returns(nameStub)

        assert.equal(user.getName(), nameStub)
    })

    // Sinon fakeServer nao funciona no NodeJs (https://github.com/sinonjs/sinon/issues/1049)
    /*it('Test getExternalUser Stub', (done) => {
        let server = sinon.fakeServer.create();
        server.autoRespond = true
        server.respondWith("GET", "https://jsonplaceholder.typicode.com/users/1", [
            200,
            { "Content-Type": "application/json" },
            '[{ "id": 1, "name": "Gwen" },  { "id": 2, "name": "John" }]'
          ]);

        user.getExternalUser((error, response) => {
            console.log(response)
            console.log(server.requests)
            //assert.equal(response['name'], 'Leanne Graham')
            done()
        })
        
        console.log(server.requests)
        server.respond();
        server.restore();
    })*/
})

describe('Nock', () => {
    beforeEach(() => {
        nock('https://jsonplaceholder.typicode.com')
        .log(console.log)
        .get('/users/1')
        .reply(200, {
            id: 123,
            name: 'Nock User'
        })
        user = new User('User 1', true)
    })
    it('Test getExternalUser', (done) => {
        user.getExternalUser((error, response) => {
            assert.equal(response['name'], 'Nock User')
            done()
        })
    })
    afterEach(() => {
        nock.restore()
    })
})