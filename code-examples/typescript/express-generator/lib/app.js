"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createError = require('http-errors');
var express_1 = __importDefault(require("express"));
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var app = express_1.default();
// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['anykey1', 'anykey3123']
}));
app.use(cookieParser());
app.use(express_1.default.static(path.join(__dirname, '..', 'public')));
app.use('/', indexRouter);
var restricted = function (req, res, next) {
    if (!req.session.user) {
        res.redirect('/login');
        return;
    }
    next();
};
app.use('/users', restricted, usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
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
