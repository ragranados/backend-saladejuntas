const productoService = require("../services/index").productoService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const userController = {}

userController.obtenerProductosPorCategoria = async (req, res, next) => {
    try {

        if (!req.params.id) {
            throw new Error();
        }

        const {status, content} = await productoService.obtenerProductosPorSubCategoria(req.params.id);

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        throw e;
    }
}

module.exports = userController;
