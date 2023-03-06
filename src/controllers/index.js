const authController = require("./auth.controller");
const userController = require("./user.controller");
const categoriaController = require("./categoria.controller");
const productoCotroller = require("./producto.controller");
const mesaController = require("./mesa.controller");
const ordenController = require("./orden.controller");

const controllers = {};

controllers.authController = authController;
controllers.categoriaController = categoriaController;
controllers.userController = userController;
controllers.productoCotroller = productoCotroller;
controllers.mesaController = mesaController;
controllers.ordenController = ordenController;

module.exports = controllers;
