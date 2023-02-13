const userService = require("../services/index").userService;
const ApiResponse = require("../responses/ApiResponse");
const Errors = require('../errors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DTO = require('../dto');

const authController = {}

authController.register = async (req, res, next) => {
    try {
        //TODO: Change user attributes
        const {username, email, password, role} = req.body;

        //TODO: Change user attributes and make them match with service method
        await userService.save(username, email, password, role);

        return res.status(200).json(ApiResponse(true, "Successful register"));
    } catch (e) {
        next(e);
    }
}

authController.login = async (req, res, next) => {
    try {
        const {username, password} = req.body;

        const user = await userService.findByUsername(username);

        const match = await bcrypt.compare(password, user.content.password);

        if (!match) {
            throw new Errors.BadCredentialsError("Incorrect Password");
        }

        const token = jwt.sign({
                id: user.content._id,
                email: user.content.email,
                username: user.content.username
            },
            process.env.JWTSECRET, {
                expiresIn: "30d",
            });

        return res.status(200).json(ApiResponse(true, "Successful login", DTO.loginDTO(token, user.content.toPublicDTO())));
    } catch (e) {
        next(e);
    }
}

module.exports = authController;
