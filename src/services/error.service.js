const ServiceResponse = require("../responses/ServiceResponse");
const Errors = require('../errors');
const mongoose = require("mongoose");
const errorModel = require('../models/error.model');

const errorService = {}

//TODO: Change error attributes as needed
errorService.save = async (errorCode, description, statusCode) => {
    const newError = new errorModel({
        errorCode,
        description,
        statusCode
    });

    await newError.save();
}


module.exports = errorService;