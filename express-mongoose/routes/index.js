var express = require('express');
var router = express.Router();
const Foods = require('../models/foods.model')

router.get('/', function(req, res, next) {
    
    const frango = new Foods({
        name: 'Frango',
        ptn: '0.3',
        cho: '0',
        lip: '0.01'
    })
    frango.save((error, result) => {
        if (error) res.statusCode(500).send(error)

        res.json(result)
    })
});

module.exports = router;