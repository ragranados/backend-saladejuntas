const BaseError = require('./baseError.errors');
const httpCodes = require('../constants/httpStatusCodes');

class UsernameOrEmailNotAvailable extends BaseError {

    constructor(name, errorCode = "01", statusCode = httpCodes.BAD_REQUEST, description = "User o Email Already Taken") {
        super(name, errorCode, statusCode, description);

        this.save = false;
    }


}

module.exports = UsernameOrEmailNotAvailable;
