const mongoose = require("mongoose");
const roles = require("../constants/roles");
const {eliminateAttrFromDoc} = require('../util');

//TODO: Add or remove user attributes as needed.
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: roles.USER,
        enum: [roles.USER, roles.ADMIN]
    }
}, {timestamps: {createdAt: 'created_at'}});

/**
 *
 * @returns Only wanted elements that are not defined in the array
 */

UserSchema.methods.toPublicDTO = function () {

    //TODO: Add unwanted attributes to the array

    return eliminateAttrFromDoc(["_id", "password"], this);
}

UserSchema.methods.myProfileInfo = function () {

    //TODO: Add unwanted attributes to the array

    return eliminateAttrFromDoc(["password"], this);
}

UserSchema.methods.removeAttributes = function (attrArray) {

    return eliminateAttrFromDoc(attrArray, this);
}

module.exports = mongoose.model("User", UserSchema)
