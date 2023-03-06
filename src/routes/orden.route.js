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

router.get("/porEstado", ordenController.obtenerOrdenesPorEstado);

//update

router.put("/agregarAOrden", ordenController.agregarAOrden);
router.put("/cambiarEstado", ordenController.cambiarEstadoOrden);
router.put("/cerrar", ordenController.cerrarOrden);

//delete

module.exports = router;
