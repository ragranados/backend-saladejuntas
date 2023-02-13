class BaseError extends Error {
    //TODO: Add or remove BaseError attributes as needed
    constructor(name, errorCode, statusCode, save, description) {
        super();

        Object.setPrototypeOf(this, new.target.prototype);

        this.name = name;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.save = true;
        this.description = description;

        Error.captureStackTrace(this);
    }
}

module.exports = BaseError