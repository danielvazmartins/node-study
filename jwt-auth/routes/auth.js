var express = require('express');
var router = express.Router();
const authService = require('../services/auth')

router.post('/', function(req, res, next) {
    console.log(req.body)
    let isValid = authService.validate(req.body['username'], req.body['password'])

    res.send('Auth => ' + isValid)
});

module.exports = router;