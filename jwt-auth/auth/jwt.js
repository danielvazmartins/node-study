const jwt = require('express-jwt');
const config = require('../config/config')

// Middleware que valida o token nas rotas seguras
// O token precisa vir no header {"Authorization": "Bearer token....."}
module.exports = (() => {
    return jwt({
        secret: config.secret
    })
})()