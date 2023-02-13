const {validationResult} = require('express-validator');

const ApiResponse = require("../responses/ApiResponse");

/**
 * Running express validator validations
 * @param req
 * @param res
 */
exports.runValidation = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(ApiResponse(false, "Errors list", {errors: errors.array()}));
    }

    next();
}
