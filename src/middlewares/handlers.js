const debug = require("debug")("app:error");
const ApiResponse = require("../responses/ApiResponse");
const {handle} = require("express/lib/router");
const errorService = require("../services").errorService;

const handlers = {};

handlers.errorHandler = (error, req, res, next) => {
    debug(error);
    console.log(error);

    if (!error.statusCode) {
        return res.status(500).json(ApiResponse(false, "Unhandled error", error));
    }

    if (error.name === "MongoError") {
        return res.status(500).json(ApiResponse(false, "Database Error", error.code));
    }

    if (error.save) errorService.save(error.errorCode, error.name, error.statusCode);

    return res.status(error.statusCode).json(ApiResponse(false, "Error", error));

};

handlers.roleHandler = (roleToVerify) => (req, res, next) => {

    if (!req.roles.includes(roleToVerify)) {
        return res.status(400).json(ApiResponse(false, "You dont have access to this request"));
    }

    next();

}

module.exports = handlers;
