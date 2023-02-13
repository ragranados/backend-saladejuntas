var express = require('express');
var router = express.Router();
var categoriaController = require("../controllers/index").categoriaController;
var passport = require('passport');
var roleHandler = require('../middlewares/handlers').roleHandler;
var roles = require('../constants/roles');
var {grantRoles} = require('../middlewares/grantRoles');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/todas", categoriaController.obtenerCategorias);

module.exports = router;
