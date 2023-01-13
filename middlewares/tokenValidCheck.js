const util = require("../modules/util");
const message = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");

tokenValidCheck = (req, res, next) => {
    console.log("token 유효성 검사 middleware");

    const result = true;

    if (!result) {
        // 검사 실패 시
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }

    // 검사 성공 시
    next();
}

module.exports = tokenValidCheck;