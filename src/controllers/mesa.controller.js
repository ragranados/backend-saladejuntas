const mesaService = require("../services/index").mesaServices;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const userController = {}

userController.obtenerMesasPorEstado = async (req, res, next) => {
    try {

        const {estado} = req.query;

        const {status, content} = await mesaService.obtenerMesasPorEstado(estado == "libre" ? 1 : 0);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        throw e;
    }
}

userController.cambiarEstadoMesa = async (req, res, next) => {
    try {

        const {id} = req.params;
        const {estado} = req.body;

        const {status, content} = await mesaService.cambiarEstadoMesa(id, estado);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        throw e;
    }
}

module.exports = userController;
