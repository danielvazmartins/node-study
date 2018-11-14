const request = require('request')
const nock = require('nock')
const Task = require('./classes/task')

const API_URL = 'https://jsonplaceholder.typicode.com'

function mockRequests() {
    // Intercepta todas requisições deste host
    nock(API_URL)
    // Faz o log das requisições
    .log(console.log)
    .persist()
    // Altera o retorno para esta URL
    .get('/todos/2')
    .reply(200, {
        "userId": 2,
        "id": 2,
        "title": "Mock from Nock",
        "completed": true
    })
}

// Comentar para ver a requisição sem o mock
mockRequests()
request.get(API_URL + '/todos/2', (error, response, body) => {
    console.log(body)
})

//mockRequests()
let task1 = new Task(API_URL)
task1.getTodos((error, response) => {
    console.log('Task1 => ', response.body)
})