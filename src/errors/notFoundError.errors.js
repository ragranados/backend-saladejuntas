const BaseError = require('./baseError.errors');
const httpCodes = require('../constants/httpStatusCodes');

class NotFoundError extends BaseError {

    constructor(name, errorCode = "02", statusCode = httpCodes.NOT_FOUND, description = 'Not Found.') {
        super(name, errorCode, statusCode, description);

        this.save = false;
    }
}

module.exports = NotFoundError;
