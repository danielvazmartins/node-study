var express = require('express');
var router = express.Router();
var request = require('request');

var pageTitle = "Request - Simplified HTTP Request";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: pageTitle });
});

// Recebe um post com o cep como parametro
router.post('/', function(req, res, next) {
	var _cep = req.body.cep;
	if ( _cep != "" ) {		
		// Faz uma requisicao externa
		request('http://viacep.com.br/ws/' + _cep + '/json/', function(error, response, body) {
			if ( response.statusCode == 200 ) {
				var data = JSON.parse(body);
				console.log(body);
				if ( data.erro ) {
					res.render('index', { title: pageTitle, msgError: 'Cep ' + _cep + ' não encontrado' });
				} else {
					res.render('index', {title: pageTitle, address: JSON.parse(body) });
				}				
			} else {
				res.render('index', { title: pageTitle, msgError: response.statusMessage });
			}			
		});
	} else {		
		res.render('index', { title: pageTitle, msgError: 'Favor preencher o CEP' });
	}
});

module.exports = router;
