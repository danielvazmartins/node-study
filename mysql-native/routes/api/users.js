var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../../config/config.js');

// Cria a conexão com o banco de dados
var con = mysql.createConnection(config.mysql);

// Retorna a lista de usuários
router.get('/', function(request, response) {
    con.query('SELECT * FROM users', function(error, data) {
		response.json(data);
    });
});

// Insere um usuário novo
router.put('/', function(request, response) {
	var usr_name = request.body.name;
	var usr_email = request.body.email;
	con.query('INSERT INTO users (usr_name, usr_email) VALUES(?,?)', [usr_name, usr_email], function(error, data) {
        console.log(error, data);
		response.json(data);
    });
});

// Atualiza um usuário
router.post('/', function(request, response) {	
	var usr_id = request.body.usr_id;
	var params = {
		usr_name: request.body.usr_name,
		usr_email: request.body.usr_email
	}
	con.query('UPDATE users SET ? WHERE usr_id = ?', [params, usr_id], function(error, data) {
		console.log(error, data);
		response.json(data);
	});
});


module.exports = router;