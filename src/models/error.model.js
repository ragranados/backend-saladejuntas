const mongoose = require("mongoose");

const ErrorSchema = new mongoose.Schema({
    errorCode: {
        type: String
    },
    description: {
        type: String
    },
    statusCode: {
        type: Number
    }
}, {timestamps: {createdAt: 'created_at'}});

module.exports = mongoose.model("Error", ErrorSchema);