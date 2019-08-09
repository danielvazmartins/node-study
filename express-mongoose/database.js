'use strict'
const mongoose = require('mongoose')
const dbName = 'express-mongoose'

module.exports.conect = () => {
    mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true});
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log(`Banco de dados conectado: ${dbName}`)
    });
}