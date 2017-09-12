var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js');

// Cria a conexão com o banco de dados
var con = mysql.createConnection(config.mysql);

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'MySql' });
});

// Cria a estrutura do banco de dados
var createTable = function() {
	var _sql = 'CREATE TABLE users (' +
  					'usr_id INT NOT NULL AUTO_INCREMENT,' +
  					'usr_name VARCHAR(60) NOT NULL,' +
  					'usr_email VARCHAR(60) NOT NULL,' +
  					'PRIMARY KEY (usr_id),' +
  					'UNIQUE INDEX usr_email_UNIQUE (usr_email ASC)' +
  				')';
  	con.query(_sql, function(error, result) {
  		if ( error ) throw error;
  		console.log('Tabela users criada');
  	});
}

module.exports = router;
