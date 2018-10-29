var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Inicializa banco
db.sequelize.sync({
    force: true
}).then(() => {
    db.teams.create({
        tea_name: 'Equipe 1'
    })
    .then(result => {
        db.users.create({
            use_email: 'user1@equipe1.com',
            use_name: 'User 1 Equipe 1',
            use_password: '123456',
            tea_id: result.dataValues.tea_id
        })
    })
    db.teams.create({
        tea_name: 'Equipe 2'
    })
    .then(result => {
        db.users.create({
            use_email: 'user1@equipe2.com',
            use_name: 'User 1 Equipe 2',
            use_password: '123456',
            tea_id: result.dataValues.tea_id
        })
    })
})

// Rotas
require('./router.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
