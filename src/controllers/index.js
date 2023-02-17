const authController = require("./auth.controller");
const userController = require("./user.controller");
const categoriaController = require("./categoria.controller");
const productoCotroller = require("./producto.controller");

const controllers = {};

//TODO: Add controllers as needed.
controllers.authController = authController;
controllers.categoriaController = categoriaController;
controllers.userController = userController;
controllers.productoCotroller = productoCotroller;

module.exports = controllers;
