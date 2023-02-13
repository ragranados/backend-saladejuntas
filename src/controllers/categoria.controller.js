const categoriaService = require("../services/index").categoriaService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const userController = {}

userController.obtenerCategorias = async (req, res, next) => {
    try {

        const {status, content} = await categoriaService.obtenerCategorias();

        return res.status(200).json(ApiResponse(status, "Success", content));

    } catch (e) {
        throw e;
    }
}

module.exports = userController;
