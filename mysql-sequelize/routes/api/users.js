var express = require('express');
var router = express.Router();
var config = require('../../config/config.js');
var Sequelize = require('sequelize');

// Cria a conexão com o banco de dados


// Cria a estrutura do banco de dados
router.get('/create-database', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});

// Remove a estrutura do banco de dados
router.get('/remove-database', function(request, response) {
	response.json({status: 'em desenvolvimento'});
});

// Retorna a lista de usuários
router.get('/', function(request, response) {
    response.json({status: 'em desenvolvimento'});
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