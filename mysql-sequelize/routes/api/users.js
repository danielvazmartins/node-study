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
	usr_name: {
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
	Users.drop()
	.then(function(data) {
		response.json({'success': true});
	})
	.catch(function(error) {
		console.log("error = ", error);		
		response.status(500).json(error); 
	});
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
	var usr_name = request.body.name;
	var usr_email = request.body.email;

	// Criando um registro novo usando o metodo create
	Users.create({
		usr_name: usr_name,
		usr_email: usr_email
	})
	.then(function(result) {
		response.json(result);
	})
	.catch(function(error) {
    	console.log("error = ", error);	
    	response.status(500).json(error);
    });

    // Criando um registro novo usando o metodo build e save
    /*var user = Users.build({
    	usr_name: usr_name,
		usr_email: usr_email
    });
    user.save()
    .then(function(result) {
		response.json(result);
	})
	.catch(function(error) {
    	console.log("error = ", error);	
    	response.status(500).json(error);
    });*/
});

// Atualiza um usuário
router.post('/', function(request, response) {	
	var usr_id = request.body.id;
	
	// Atualiza usando o find e update
	var newData = {
		usr_name: request.body.name,
		usr_email: request.body.email
	}
	// Procura o registro que será alterado
	Users.findOne({
		where: {
			usr_id: usr_id
		}
	}).then(function(user) {
		// Altera o registro retornado
		user.update(newData).
		then(function(result) {
			response.json(result);
		})
		.catch(function(error) {
	    	console.log("error = ", error);	
	    	response.status(500).json(error);
	    });
	});

	// Atualiza usando find e save
	/*// Procura o registro que será alterado
	Users.findOne({
		where: {
			usr_id: usr_id
		}
	}).then(function(user) {
		// Altera o registro retornado
		user.usr_name = request.body.name;
		user.usr_email = request.body.email
		user.save().
		then(function(result) {
			response.json(result);
		})
		.catch(function(error) {
	    	console.log("error = ", error);	
	    	response.status(500).json(error);
	    });
	});*/

});

// Remove um usuário
router.delete('/:id', function(request, response) {
	// Remover um registro usando o where direto no destroy
	var usr_id = request.params.id;
	Users.destroy({
		where: {
			usr_id: usr_id
		}
	})
	.then(function(result) {
		response.json(result);
	})
	.catch(function(error) {
    	console.log("error = ", error);	
    	response.status(500).json(error);
    });

	// Remover um registro pesquisando e removendo
	/*var usr_id = request.params.id;
	Users.findOne({
		where: {
			usr_id: usr_id
		}
	})
	.then(function(user) {
		// Remove o registro retornado
		user.destroy()
		.then(function(result) {
			response.json(result);
		});
	});*/	
});


module.exports = router;