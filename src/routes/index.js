var express = require('express');
var router = express.Router();

var userRouter = require("./users.route");
var categoriaRouter = require("./categoria.route");
var authRouter = require("./auth.router");
var productoRouter = require("./producto.route");
var mesaRouter = require("./mesa.route");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

//TODO: Add routers as needed.
router.use("/user", userRouter);
router.use("/categoria", categoriaRouter);
router.use("/auth", authRouter);
router.use("/producto", productoRouter);
router.use("/mesa", mesaRouter);

module.exports = router;
