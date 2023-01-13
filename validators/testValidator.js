const {body, check, param, query} = require("express-validator");
const validatorErrorCheck = require("../middlewares/validatorErrorCheck");

validators = {
    chapter1: [
        check("aaa", "정수인지 확인해주세요.").isInt(),
        validatorErrorCheck
    ]
}

module.exports = validators;