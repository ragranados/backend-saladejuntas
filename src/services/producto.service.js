const ServiceResponse = require("../responses/ServiceResponse");
const userModel = require("../models/user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');
const db = require("../database/dbconnection");

const service = {};

//TODO: Change user attributes

service.obtenerProductosPorSubCategoria = async (idSubCategoria) => {

    return ServiceResponse(true, await db.Producto.findAll({
        where: {
            subCategoryId: idSubCategoria
        }
    }));

}

module.exports = service;
