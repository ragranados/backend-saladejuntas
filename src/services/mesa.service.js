const ServiceResponse = require("../responses/ServiceResponse");
const db = require("../database/dbconnection");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Errors = require('../errors');

const service = {};

service.obtenerMesasPorEstado = async (estado) => {

    return ServiceResponse(true, await db.Mesa.findAll({where: {libre: estado}}));

}

service.cambiarEstadoMesa = async (mesaId, estado) => {

    const mesa = await db.Mesa.findByPk(mesaId);

    if (!mesa) {
        return ServiceResponse(false, null);
    }

    mesa.libre = estado;
    await mesa.save();

    return ServiceResponse(true, "Mesa actualizada");
}

module.exports = service;
