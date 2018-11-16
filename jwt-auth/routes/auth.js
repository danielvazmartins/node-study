var express = require('express');
var router = express.Router();
const authService = require('../services/auth')

router.post('/', function(req, res, next) {
    let user = authService.validate(req.body['username'], req.body['password'])
    if ( user ) {
        res.json(user)
    } else {
        res.status(400).json({ 
            message: 'Username or password is incorrect' 
        })
    }
});

module.exports = router;