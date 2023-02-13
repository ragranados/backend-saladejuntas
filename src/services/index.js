const userService = require("./user.service");
const errorService = require("./error.service");
const categoriaService = require("./categoria.service");

const Services = {};

//TODO: Add services as needed.
Services.userService = userService;
Services.categoriaService = categoriaService;
Services.errorService = errorService;

module.exports = Services;
