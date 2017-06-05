var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {	

	// Estrategia local para fazer a autenticacao
	passport.use(new LocalStrategy(
		function(username, password, done) {
			// Valida o usuario
			if ( password == "teste" ) {
				
				// Cria um objeto do usuario para retornar
				var user = {
					username: username
				}

				// Retorno com sucesso
				return done(null, user);
			} else {
				// Retorno com erro
				return done(null, false, {message: "A senha está incorreta"});
			}		
		}
	));

	// Carrega o usuario na sessao
	passport.serializeUser(function(user, done){
		done(null, user.username);
	});

	// Retira o usuario da sessao
	passport.deserializeUser(function(id, done){
		var user = {
			username: id
		}

		done(null, user);
	});
};