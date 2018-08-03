'use strict';
var express = require('express');
var router = express.Router();
var db = require('./../models');

// Retorna todos os registros
router.get('/', function(req, res, next) {
    db.users.findAll({})
    .then(function(result) {
        res.json(result);
    });
});

// Retorna todos usuários de uma equipe
router.get('/team/:teamId', function(req, res, next) {
    let tea_id = req.params.teamId;

    db.users.findAll({
        where: {
            tea_id: tea_id
        }
    })
    .then(function(result) {
        res.json(result);
    });
});

// Retorna os detalhes do usuário incluindo os dados da equipe
router.get('/:userId', function(req, res, next) {
    let use_id = req.params.userId;

    try {
        db.users.findOne({
            where: {
                use_id: use_id
            },
            // Inner join com tabela teams
            include: [ db.teams ]
        })
        .then(function(result) {
            res.json(result);
        })
        .catch(function(error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
    
});

module.exports = router;