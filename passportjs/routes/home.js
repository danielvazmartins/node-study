var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	if ( req.isAuthenticated() ) {
		res.render('home', {
			user: req.user
		});
	} else {
		res.redirect('/login');
	}		
});

module.exports = router;