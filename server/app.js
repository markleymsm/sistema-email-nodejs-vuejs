const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('./src/db/connection');
const cors = require('cors');
const routes = require('./src/routes');
// const validator = require('express-validator');

// let indexRouter = require('./routes/index');
// let usersRouter = require('./routes/users');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(validator());


// app.use('/', indexRouter);
// app.use('/users', usersRouter);

routes(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
  // let err = new Error('Not Found');
  // err.status = 404;
  // next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
