
class Task {

    constructor(API_URL, request) {
        this.API_URL = API_URL
        this.request = request || require('request')
    }

    getTodos(callback) {
        this.request.get(this.API_URL + '/todos/2', (error, response) => {
            //console.log('body => ', response.body)
            return callback(error, response)
        })
    }
}

module.exports = Task