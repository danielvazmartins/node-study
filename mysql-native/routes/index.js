var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config.js');

// Cria a conexão com o banco de dados
var con = mysql.createConnection(config.mysql);

/* GET home page. */
router.get('/', function(req, res, next) {

	// Teste a conexão do banco
	/*con.connect(function(error) {
		if (error) {
			throw error;
		}
		console.log('Conectado ao mysql');
		// Cria uma tabela no banco
		//createTable();
	});*/

	

	res.render('index', { title: 'MySql' });
});

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
