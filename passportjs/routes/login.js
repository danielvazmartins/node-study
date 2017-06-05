var express = require('express');
var router = express.Router();

module.exports = function(passport) {
	// Abre a pagina de login
	router.get('/', function(req, res, next) {
		res.render('login');
	});

	// No post, faz a autenticacao
	router.post('/', 
		passport.authenticate('local', {
			successRedirect: '/home',
			failureRedirect: '/login'
		})
	);

	// Faz o logout
	router.get('/logout', function(req, res, next) {
		req.logout();
		res.redirect('/');
	});

	return router;
};