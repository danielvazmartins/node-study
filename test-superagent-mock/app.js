var request = require('superagent');
var config = require('./superagent-mock-config');
const Task = require('./classes/task')
const API_URL = 'https://jsonplaceholder.typicode.com'

// Request buscando dados externos
request.get(API_URL + '/todos/2', (error, response) => {
    console.log('Request1 => ', response.body)
})

// Before tests
var superagentMock = require('superagent-mock')(request, config);

// Request retornando dados do Mock
request.get(API_URL + '/todos/2', (error, response) => {
    console.log('Request2 => ', response.body)
})

// Retorna dados do Mock, passando o request do superagent
let task1 = new Task(API_URL, request)
task1.getTodos((error, response) => {
    console.log('Task1 => ', response.body)
})

// Retorna dados externos
let task2 = new Task(API_URL)
task2.getTodos((error, response) => {
    console.log('Task2 =>', response.body)
})

// After tests
superagentMock.unset();