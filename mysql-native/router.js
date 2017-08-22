module.exports = function(app) {

	// Página principal
	var index = require('./routes/index');
	app.use('/', index);

	// Rota para as APIs REST
	var users = require('./routes/api/users');
	app.use('/api/users', users);
}