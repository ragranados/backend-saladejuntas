const userService = require('../services/index').userService;
var JwtStrategy = require('passport-jwt').Strategy;
var {ExtractJwt} = require('passport-jwt');

//TODO: Change Passport Config Ass Needed.
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWTSECRET;

exports.JwtStrategy = new JwtStrategy(opts, async (payload, done) => {
    const response = await userService.findByUsername(payload.username);

    return done(null, response.content);
});
