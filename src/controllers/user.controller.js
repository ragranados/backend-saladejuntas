const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const userController = {}

userController.getMyProfile = (req, res, next) => {
    try {

        return res.status(200).json(ApiResponse(true, "Success", req.user.myProfileInfo()));
    } catch (e) {
        throw e;
    }
}

module.exports = userController;
