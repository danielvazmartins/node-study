var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../../config/config.js');

// Cria a conexão com o banco de dados
var con = mysql.createConnection(config.mysql);

// Cria a estrutura do banco de dados
router.get('/create-database', function(request, response) {

	// Teste a conexão do banco
	con.connect(function(error) {
		if (error) {						
			//config.mysql.database = 'node-study-mysql';
			var dbName = config.mysql.database;
			delete config.mysql.database;
			con = mysql.createConnection(config.mysql);
			con.connect(function(error) {				
				if (error) {
		    		response.status(500).json(error);
		    	} else {
		    		// Criar bando de dados
		    		var _sql = 'CREATE DATABASE IF NOT EXISTS `' + dbName + '`'; 
		    		con.query(_sql, function(error, data) {
				    	if (error) {
				    		response.status(500).json(error);
				    	} else {
				    		// Cria tabela no banco
				    		var _sql = 'CREATE TABLE users (' +
						  					'usr_id INT NOT NULL AUTO_INCREMENT,' +
						  					'usr_name VARCHAR(60) NOT NULL,' +
						  					'usr_email VARCHAR(60) NOT NULL,' +
						  					'PRIMARY KEY (usr_id),' +
						  					'UNIQUE INDEX usr_email_UNIQUE (usr_email ASC)' +
						  				')';
						  	con.query(_sql, function(error, result) {
						  		if ( error ) {
						  			response.status(500).json(error);
						  		} else {
						  			response.json({'success': true});
						  		}						  		
						  	});				    		
				    	}		
				    });		    		
		    	}
			});			
		} else {
			response.json({'success': true});	
		}
		// Cria uma tabela no banco
		//createTable();
	});
});

// Retorna a lista de usuários
router.get('/', function(request, response) {
    con.query('SELECT * FROM users', function(error, data) {
    	if (error) {
    		response.status(500).json(error);
    	} else {
    		response.json(data);
    	}		
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
	var usr_id = request.body.id;
	var params = {
		usr_name: request.body.name,
		usr_email: request.body.email
	}
	con.query('UPDATE users SET ? WHERE usr_id = ?', [params, usr_id], function(error, data) {
		response.json(data);
	});
});


module.exports = router;