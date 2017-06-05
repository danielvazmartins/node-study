var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// Verifica se esta autenticado
	if ( req.isAuthenticated() ) {
		res.redirect('/home');
	} else {
		res.render('index', { title: 'Passport Node Authentication' });
	}
});

module.exports = router;
