const ordenService = require("../services/index").ordenServices;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const ordenController = {}

ordenController.ingresarOrden = async (req, res, next) => {
    try {

        const {mesa, metodoPago, items} = req.body;

        const {status, content} = await ordenService.ingresarOrden(mesa, metodoPago, items);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

ordenController.obtenerOrdenesActivas = async (req, res, next) => {
    try {

        const {status, content} = await ordenService.obtenerOrdenesActivas();

        if (!status) {
            throw new Error("No");
        }

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        next(e);
    }
}

module.exports = ordenController;
