'use strict'
const mongo = require('mongodb').MongoClient
const mongoUrl = 'mongodb://localhost:27017'

// Cria a conexão com banco de dados
mongo.connect(mongoUrl, (error, client) => {
    if (error) {
        console.log(error)
        return
    }
    mongoTasks(client)
})

function mongoTasks(client) {
    // Seleciona a database
    const db = client.db('local')

    // Seleciona ou cria a collection se não existir
    const collection = db.collection('mongo-native')

    const newObject = { fieldText: 'testando',fieldNumber: '123' }
    const newArray = [
        { fieldText: 'insert1',fieldNumber: 1 },
        { fieldText: 'insert2',fieldNumber: 2 },
        { fieldText: 'insert3',fieldNumber: 3 }       
    ]

    deleteAll(collection)
    insertOne(collection, newObject)
    insertMany(collection, newArray)
    findAll(collection)
    findFilter(collection, {fieldNumber: 1})
}

function deleteAll(collection) {
    // Remove todos os documentos da collection
    collection.deleteMany()
}

function insertOne(collection, newObject) {
    // Insere um novo documento
    collection.insertOne(newObject, (error, result) => {
        if (error) return console.log(error)
        console.log('insertOne OK')
    })
}

function insertMany(collection, newArray) {
    // Insere um array de documentos
    collection.insertMany(newArray, (error, result) => {
        if (error) return console.log(error)
        console.log('insertMany OK')
    })
}

function findAll(collection) {
    // Lista todos os documentos
    collection.find().toArray((error, items) => {
        console.log(`Find returnou ${items.length} registros`)
    })
}

function findFilter(collection, filter) {
    // Lista todos os documentos utilizando um filtro na pesquisa
    collection.find(filter).toArray((error, items) => {
        console.log(`FindFilter returnou ${items.length} registros`)
    })
}