const userService = require("./user.service");
const errorService = require("./error.service");

const Services = {};

//TODO: Add services as needed.
Services.userService = userService;
Services.errorService = errorService;

module.exports = Services;