'use strict'
const db = require('../../models')

class FoodsService {
    getAll() {
        return db.Foods.findAll({})
    }

    create(name, ptn, cho, lip) {
        return db.Foods
        .create({name, ptn, cho, lip})
    }
}

module.exports = FoodsService