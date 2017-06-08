var express = require('express');
var router = express.Router();
var request = require('request');

var pageTitle = "Request - Simplified HTTP Request";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: pageTitle });
});

router.post('/', function(req, res, next) {
	var _cep = req.body.cep;
	if ( _cep != "" ) {
		request('http://viacep.com.br/ws/' + _cep + '/json/', function(error, response, body) {
			console.log('error', error);
			console.log('response', response);
			console.log('body', body)
			if ( response.statusCode == 200 ) {
				res.render('index', { 
					title: pageTitle,
					address: JSON.parse(body)
				});
			} else {
				res.render('index', { title: pageTitle, msgError: response.statusMessage });
			}			
		});
	} else {
		res.render('index', { title: pageTitle });
	}
});

module.exports = router;
