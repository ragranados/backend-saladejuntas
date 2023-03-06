const {check, param} = require("express-validator");


const validator = {}

validator.registerValidator = [
    check("username")
        .notEmpty().withMessage("username is requiered."),
    check("email")
        .notEmpty().withMessage("email field is requiered."),
    check("password")
        .notEmpty().withMessage("pass is requiered."),
];

validator.loginValidator = [
    check("username")
        .notEmpty().withMessage("username is requiered."),
    check("password")
        .notEmpty().withMessage("pass is requiered."),
];

module.exports = validator;
