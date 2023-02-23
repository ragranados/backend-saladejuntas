const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

//TODO: Change user attributes

service.obtenerCategorias = async () => {

    return ServiceResponse(true, await db.Mesa.findAll());

}

service.cambiarEstadoMesa = async (estado) => {

    return ServiceResponse(true, await db.Mesa.findAll());

}

module.exports = service;
