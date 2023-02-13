const NotFoundError = require('./notFoundError.errors');
const UsernameOrEmailNotAvailable = require('./usernameOrEmailNotAvailable.errors');
const BadCredentialsError = require('./badCredencialsError.errors');

const Errors = {}

//TODO: Add new errors here
Errors.NotFoundError = NotFoundError;
Errors.UsernameOrEmailNotAvailable = UsernameOrEmailNotAvailable;
Errors.BadCredentialsError = BadCredentialsError;

module.exports = Errors;