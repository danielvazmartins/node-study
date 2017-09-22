var express = require('express');
var router = express.Router();
var config = require('../../config/config.js');
var Sequelize = require('sequelize');

// Cria a conexão com o banco de dados
var sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	dialect: 'mysql'
});

// Cria a estrutura do banco de dados
router.get('/create-database', function(request, response) {

	// Verifica conexão com o banco
	sequelize.authenticate()
	.then(function(data) {
		var Users = sequelize.define('users', {
			usr_id: {
				type: Sequelize.INTEGER
			},
			urs_name: {
				type: Sequelize.STRING
			},
			usr_email: {
				type: Sequelize.STRING
			}
		});

		Users.sync({
			force: true // Força o DROP TABLE se a tabela já existir
		})
		.then(function(data) {
			console.log("sync " + data);
		});

		console.log("data");
		response.json(data);
	})
	.catch(function(error) {		
		response.status(500).json(error); 
	});
});

// Remove a estrutura do banco de dados
router.get('/remove-database', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});

// Retorna a lista de usuários
router.get('/', function(request, response) {
	response.status(500).json('em desenvolvimento');    
});

// Insere um usuário novo
router.put('/', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});

// Atualiza um usuário
router.post('/', function(request, response) {	
	response.json({status: 'em desenvolvimento'});
});

// Remove um usuário
router.delete('/:id', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});


module.exports = router;