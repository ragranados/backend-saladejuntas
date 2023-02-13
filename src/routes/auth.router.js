var express = require('express');
var router = express.Router();
var {runValidation} = require('../middlewares/express-validatorConf');
var {registerValidator, loginValidator} = require('../validators/user.validator');

var authController = require("../controllers/auth.controller");

router.post("/register", registerValidator, runValidation, authController.register);
router.post("/login", loginValidator, runValidation, authController.login);

module.exports = router;
