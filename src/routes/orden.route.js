var express = require('express');
var router = express.Router();
var ordenController = require("../controllers/index").ordenController;
var passport = require('passport');
var roleHandler = require('../middlewares/handlers').roleHandler;
var roles = require('../constants/roles');
var {grantRoles} = require('../middlewares/grantRoles');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//create

router.post("/ingresar", ordenController.ingresarOrden);

//read

router.get("/todas", ordenController.obtenerOrdenesActivas);

//update

//delete

module.exports = router;
