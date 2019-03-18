'use strict'
const fs = require('fs')

const fileName = './files/file1.txt'
const fileJson = './files/file1.json'

// Lê um arquivo de forma sincrona
const file = fs.readFileSync(fileName, 'utf-8')
console.log('sync', file)

// Lê um arquivo de forma assincrona
fs.readFile(fileName, {encoding: 'utf-8'}, (error, data) => {
    console.log('async', data.toString())
})

// Altera um arquivo de texto
const newText = "Arquivo alterado"
fs.writeFile(fileName, newText, (error) => {
    (error)? console.log('Erro ao salvar arquivo'): console.log('Arquivo salvo com sucesso')
})

const newJson = {
    user: 'user1',
    pass: 'pass1'
}

fs.writeFile(fileJson, JSON.stringify(newJson), (error) => {
    (error)? console.log('Erro ao salvar arquivo Json'): console.log('Arquivo JSON salvo com sucesso')
})