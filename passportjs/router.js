module.exports = function(app, passport) {
	var index = require('./routes/index');
	app.use('/', index);

	var login = require('./routes/login')(passport);
	app.use('/login', login);

	var home = require('./routes/home');	
	app.use('/home', home);
};