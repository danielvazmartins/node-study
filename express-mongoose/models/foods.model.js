'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodsSchema = new Schema({
    name: String,
    ptn: Number,
    cho: Number,
    lip: Number
})

module.exports = mongoose.model('Foods', foodsSchema)