const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

//TODO: Change user attributes

service.obtenerProductosPorCategoria = async (idCategoria) => {

    return await userModel.exists({categoria: idCategoria});

}

service.obtenerProductosPorSubCategoria = async (idSubCategoria) => {

    return await userModel.exists({subCategoria: idSubCategoria});

}

module.exports = service;
