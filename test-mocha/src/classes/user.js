const request = require('request')
class User {
    constructor(name, valid) {
        this.name = name
        this.valid = valid || false
    }
    isValid() {
        return this.valid
    }
    getName() {
        return this.name
    }

    getExternalUser(callback) {
        request.get('https://jsonplaceholder.typicode.com/users/1', (error, response) => {
            callback(null, JSON.parse(response.body))
        })
    }
 }

module.exports = User