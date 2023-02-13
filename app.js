require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require("./src/database/mongodb");
var passport = require('passport');
var passportMiddleware = require('./src/middlewares/passportConfig');
var {grantRoles} = require('./src/middlewares/grantRoles');

db.connect();
var indexRouter = require('./src/routes/index');
var handlers = require("./src/middlewares/handlers");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//config

passport.use('jwt', passportMiddleware.JwtStrategy)

app.use('/', indexRouter);

app.use(handlers.errorHandler);

module.exports = app;
