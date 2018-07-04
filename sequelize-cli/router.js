module.exports = function(app) {
    
	// Página principal
	var index = require('./routes/index');
	app.use('/', index);
}