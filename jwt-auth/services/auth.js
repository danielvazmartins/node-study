'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config/config')

class AuthService {
    static validate(username, password) {
        if (username == 'admin' && password == 'admin') {
            const user = {
                id: 11,
                username: 'admin'
            }
            // Pode salver qualquer informação dentro do token (salvar o necessário para utilizar no front)
            const token = jwt.sign({ user }, config.secret);
            return { user, token }
        } else {
            return false
        }
    }
}
module.exports = AuthService