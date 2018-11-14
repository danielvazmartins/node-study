const jwt = require('express-jwt');

//module.exports = jwtAuth()
module.exports = (() => {
    return jwt({
        secret: 'secrethash565657567'
    })
})()