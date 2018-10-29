module.exports = function(app) {
    
	// Página principal
	var index = require('./routes/index');
	app.use('/', index);

	// Apis
	var users = require('./routes/users');
	app.use('/users', users)

	var teams = require('./routes/teams');
	app.use('/teams', teams);
}