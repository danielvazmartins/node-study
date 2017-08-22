var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Cria a conexão com o banco de dados
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'teste10',
	database: 'node-study-mysql'
});

/* GET home page. */
router.get('/', function(req, res, next) {

	// Teste a conexão do banco
	con.connect(function(error) {
		if (error) {
			throw error;
		}
		console.log("Conectado ao mysql");
	});

	res.render('index', { title: 'MySql' });
});

module.exports = router;
