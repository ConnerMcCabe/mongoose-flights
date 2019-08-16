// AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time.
// AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.
//    Checkout the <input type="datetime-local"> to assist users in entering valid date/time values.
// AAU, I want to be able to access each view via a navigation bar at the top of the page with links to: ALL FLIGHTS, and ADD FLIGHT
// AAU, I want to view the list of flights by departure date in ascending order.
// AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.
// AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)
// AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes
// AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)






var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./config/database');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
