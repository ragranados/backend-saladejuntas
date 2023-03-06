const roles = require('../constants/roles');

/**
 *
 * @param req
 * @param res
 * @param next
 */
exports.grantRoles = (req, res, next) => {
    const grantedRoles = [];

    if (req.user.role === roles.USER) {
        grantedRoles.push(roles.USER);
    }

    if (req.user.role === roles.ADMIN) {
        grantedRoles.push(roles.USER);
        grantedRoles.push(roles.ADMIN);
    }

    req.roles = grantedRoles;

    next();
}
