const { validationResult } = require("express-validator");
const statusCode = require("../modules/statusCode");

/**
 * 유효성 검사 실패 middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
validatorErrorCheck = (req, res, next) => {
    const errors = validationResult(req);
    console.log("validatorErrorChecker");
    if (!errors.isEmpty()) {
        return res.status(statusCode.BAD_REQUEST).send({ errors: errors.array() });
    }
    next();
}

module.exports = validatorErrorCheck;