var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {	

	// Estrategia local para fazer a autenticacao
	passport.use(new LocalStrategy({
			usernameField: 'email', // O padrao e username
			passwordField: 'password', // Esse ja e o valor padrao
			passReqToCallback: true // Passa a requisicao como parametro para o callback abaixo
		},
		function(req, email, password, done) {
			// Valida o usuario
			if ( password == "teste" ) { 
				
				// Cria um objeto do usuario para retornar
				var user = {
					email: email // Apenas um ID para armazenar o usuario na sessao
				}

				// Retorno com sucesso
				return done(null, user);
			} else {
				// Retorno com erro
				return done(null, false, {message: "A senha está incorreta"});
			}		
		}
	));

	// Salva o ID do usuario na sessao
	passport.serializeUser(function(user, done){
		done(null, user.email);
	});

	// Carrega o usuario da sessao
	passport.deserializeUser(function(id, done){
		// Carrega os dados do usuario atravez do ID que estava na sessao
		var user = {
			email: id,
			nome: 'Daniel'
		}

		done(null, user);
	});
};