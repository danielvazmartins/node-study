var express = require('express');
var router = express.Router();
var config = require('../../config/config.js');
var Sequelize = require('sequelize');

// Cria a conexão com o banco de dados
var sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
	host: config.mysql.host,
	dialect: 'mysql',
	timestamp: false // Adiciona os campos createAt e updateAt quando cria a tabela se estiver true
});

// Cria a tabela users
var Users = sequelize.define('users', {
	usr_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	urs_name: {
		type: Sequelize.STRING(60),
		allowNull: false
	},
	usr_email: {
		type: Sequelize.STRING(60),
		allowNull: false,
		unique: true
	}
});

// Cria a estrutura do banco de dados
router.get('/create-database', function(request, response) {

	// Verifica conexão com o banco
	sequelize.authenticate()
	.then(function(data) {		

		Users.sync({
			force: true // Força o DROP TABLE se a tabela já existir (retirar ou mudar para false em produção)
		})
		.then(function(data) {
			console.log("sync success = " + data);
			response.json({'success': true});
		});		
	})
	.catch(function(error) {
		console.log("error = ", error);		
		response.status(500).json(error); 
	});
});

// Remove a estrutura do banco de dados
router.get('/remove-database', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});

// Retorna a lista de usuários
router.get('/', function(request, response) {
    Users.findAll()
    .then(function(result) {
    	response.json(result);
    })
    .catch(function(error) {
    	console.log("error = ", error);	
    	response.status(500).json(error);
    });
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