/**
 *
 * @param token
 * @param userInfo
 * @returns {{userInfo, token}}
 */

const loginResponseDTO = (token, userInfo) => {
    return {
        token,
        userInfo
    }
}

module.exports = loginResponseDTO;
