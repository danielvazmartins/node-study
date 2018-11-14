const jwt = require('./auth/jwt')
module.exports = (app) => {

    const index = require('./routes/index')
    app.use('/', index)

    const private = require('./routes/private')
    app.use('/private', jwt, private)

    const public = require('./routes/public')
    app.use('/public', public)

    const auth = require('./routes/auth')
    app.use('/auth', auth)
}