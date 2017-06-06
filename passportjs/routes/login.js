var express = require('express');
var router = express.Router();

module.exports = function(passport) {
	// Abre a pagina de login
	router.get('/', function(req, res, next) {
		res.render('login', {messageFlash: req.flash('error')});
	});

	// No post, faz a autenticacao
	router.post('/', 
		passport.authenticate('local', {
			successRedirect: '/home',
			failureRedirect: '/login',
			badRequestMessage: 'Favor informar o e-mail e a senha', // Altera mensagem "missing credentials"
			failureFlash: true
		})
	);

	// Faz o logout
	router.get('/logout', function(req, res, next) {
		req.logout();
		res.redirect('/');
	});

	return router;
};