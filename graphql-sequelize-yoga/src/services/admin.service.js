'use strict'
const db = require('../../models')

class AdminService {
    initDb() {
        return db.sequelize.sync({
            force: true
        })
    }
}

module.exports = AdminService