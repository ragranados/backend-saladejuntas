const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

//TODO: Change user attributes

service.obtenerCategorias = async () => {

    return ServiceResponse(true, await db.Categoria.findAll({include: [db.SubCategoria]}));

}

module.exports = service;
