var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../../config/config.js');

// Cria a conexão com o banco de dados
var con = mysql.createConnection(config.mysql);

router.get('/', function (request, response) {
    con.query('SELECT * FROM users', function (error, data) {
        console.log(error, data);
		response.json(data);
    });
});

module.exports = router;