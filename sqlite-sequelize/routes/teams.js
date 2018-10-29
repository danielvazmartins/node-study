'use strict';
var express = require('express');
var router = express.Router();
var db = require('./../models');

// Retorna todos os registros
router.get('/', function(req, res, next) {
    db.teams.findAll({})
    .then(function(result) {
        res.json(result);
    });
});

// Insere um novo registro
router.post('/', function(req, res, next) {
    console.log(req.body);
    let tea_name = req.body.teamName;

    db.teams.create({
        tea_name: tea_name
    })
    .then(function(result) {
        res.json(result);
    });    
});

// Remove um registro
router.delete('/:teamId', function(req, res, next) {
    db.teams.destroy({
        where: {
            tea_id: req.params.teamId
        }
    })
    .then(function(result) {
        res.json(result);
    });
});

module.exports = router;