/**
 *
 * @param ok
 * @param message
 * @param data
 * @returns {{data: null, ok, message}}
 * @constructor
 */

const ApiResponse = (ok, message, data = null) => {

    return {
        ok,
        message,
        data
    }
}

module.exports = ApiResponse;