var express = require('express');
var router = express.Router();
var userController = require("../controllers/index").userController;
var passport = require('passport');
var roleHandler = require('../middlewares/handlers').roleHandler;
var roles = require('../constants/roles');
var {grantRoles} = require('../middlewares/grantRoles');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/me", passport.authenticate("jwt", {session: false}), grantRoles, roleHandler(roles.ADMIN), userController.getMyProfile);

module.exports = router;
