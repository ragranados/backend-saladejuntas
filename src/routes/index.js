var express = require('express');
var router = express.Router();

var userRouter = require("./users.route");
var categoriaRouter = require("./categoria.route");
var authRouter = require("./auth.router");
var productoRouter = require("./producto.route");
var mesaRouter = require("./mesa.route");
var ordenRouter = require("./orden.route");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.use("/user", userRouter);
router.use("/categoria", categoriaRouter);
router.use("/auth", authRouter);
router.use("/producto", productoRouter);
router.use("/mesa", mesaRouter);
router.use("/orden", ordenRouter);

module.exports = router;
