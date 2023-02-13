/**
 *
 * @param token
 * @param userInfo
 * @returns {{userInfo, token}}
 */

//TODO: Add or remove attributes as needed
const loginResponseDTO = (token, userInfo) => {
    return {
        token,
        userInfo
    }
}

module.exports = loginResponseDTO;