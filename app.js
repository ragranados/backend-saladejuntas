require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var morganLogger = require('morgan');
var db = require("./src/database/dbconnection");
const fs = require('fs')
var passport = require('passport');
var cors = require("cors");
var passportMiddleware = require('./src/middlewares/passportConfig');
var {grantRoles} = require('./src/middlewares/grantRoles');

var indexRouter = require('./src/routes/index');
var handlers = require("./src/middlewares/handlers");

var app = express();
app.use(cors());

/*const accessLogStream = fs.createWriteStream(`${process.env.LOG_PATH ? process.env.LOG_PATH : __dirname}access.log`, {flags: 'a'})

if (process.env.DEV) {
    app.use(morganLogger('dev'));
}

if (!process.env.DEV) {
    app.use(morganLogger('combined', {stream: accessLogStream}));
}*/

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//config

passport.use('jwt', passportMiddleware.JwtStrategy)

app.use('/', indexRouter);

db.sync();

app.use(handlers.errorHandler);

module.exports = app;
