/**
 *
 */

/*class ServiceResponse {

    constructor(status, content) {
        this.status = status;
        this.content = content;
    }
}*/

const ServiceResponse = (status, content) => {

    return {
        status,
        content
    }
}

module.exports = ServiceResponse;