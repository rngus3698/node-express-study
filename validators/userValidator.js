const {body, check} = require('express-validator');
const validatorErrorCheck = require("../middlewares/validatorErrorCheck");

validators = {
    login: [
        check("id").isString(),
        check("password").isString(),
        validatorErrorCheck
    ],
}

module.exports = validators;