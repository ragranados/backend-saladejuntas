const authController = require("./auth.controller");
const userController = require("./user.controller");

const controllers = {};

//TODO: Add controllers as needed.
controllers.authController = authController;
controllers.userController = userController;

module.exports = controllers;