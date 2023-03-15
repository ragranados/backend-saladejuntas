const ordenService = require("../services/index").ordenServices;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const ordenController = {}

ordenController.ingresarOrden = async (req, res, next) => {
    try {

        const {cuentaId, nombre, mesas, metodoPago, items} = req.body;

        const {status, content} = await ordenService.ingresarOrden(cuentaId, nombre, mesas, metodoPago, items);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.agregarAOrden = async (req, res, next) => {
    try {

        const {idSubCuenta, items} = req.body;

        const {status, content} = await ordenService.agregarAOrden(idSubCuenta, items);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.cambiarEstadoOrden = async (req, res, next) => {
    try {

        const {ordenId, estado} = req.body;

        const {status, content} = await ordenService.cambiarEstadoOrden(ordenId, estado);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.preCerrarOrden = async (req, res, next) => {
    try {

        const {ordenId} = req.body;

        const {status, content} = await ordenService.preCerrarOrden(ordenId);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.cerrarOrden = async (req, res, next) => {
    try {

        const {ordenId, metodoPagoId} = req.body;

        const {status, content} = await ordenService.cerrarOrden(ordenId, metodoPagoId);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.obtenerOrdenesPorEstado = async (req, res, next) => {
    try {

        const {estadoId} = req.query;

        const {status, content} = await ordenService.obtenerCuentasPorEstado(estadoId);

        if (!status) {
            throw new Error("No");
        }

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.obtenerMetodosDePago = async (req, res, next) => {
    try {

        const {status, content} = await ordenService.obtenerMetodosDePago();

        if (!status) {
            throw new Error("No");
        }

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

//TODO Agregar logica de propinas

module.exports = ordenController;
