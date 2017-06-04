var express = require('express');
var router = express.Router();

module.exports = function(passport) {
	router.get('/', function(req, res, next) {
		res.render('login');
	});

	router.post('/', 
		passport.authenticate('local', {
			successRedirect: '/home',
			failureRedirect: '/login'
		})
	);

	return router;
};