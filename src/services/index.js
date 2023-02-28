const userService = require("./user.service");
const errorService = require("./error.service");
const categoriaService = require("./categoria.service");
const productoService = require("./producto.service");
const mesaServices = require("./mesa.service");
const ordenServices = require("./orden.service");

const Services = {};

//TODO: Add services as needed.
Services.userService = userService;
Services.categoriaService = categoriaService;
Services.errorService = errorService;
Services.productoService = productoService;
Services.mesaServices = mesaServices;
Services.ordenServices = ordenServices;

module.exports = Services;
