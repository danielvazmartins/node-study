var express = require('express');
var app = express();

// Url da requisicao
app.get('/', function(req, res) {
	res.send('Hello World!');
});

// Inicia o app express para ouvir em uma porta
app.listen('3000', function() {
	console.log('This server is listening on port 3000');
});