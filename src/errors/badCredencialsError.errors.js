const BaseError = require('./baseError.errors');
const httpCodes = require('../constants/httpStatusCodes');

class BadCredencialsError extends BaseError {
    //TODO: Add or remove BadCredencialError attributes as needed
    constructor(name, errorCode = "03", statusCode = httpCodes.BAD_CREDENTIALS, description = 'Invalid Credentials') {
        super(name, errorCode, statusCode, description);

        this.save = false;
    }
}

module.exports = BadCredencialsError;
