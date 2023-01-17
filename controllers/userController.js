const responseMessage = require("../common/responseMessage");
const statusCode = require("../common/statusCode");
const responseUtil = require("../common/responseUtil");
const http = require("http");


userController = {
    /**
     * 로그인
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    login: async (req, res, next) => {
        let aa = "";
        try{
            aa = await new Promise((resolve, reject) => {
                const options = {
                    host: '54.180.180.24',
                    port: '8080',
                    path: '/v2/cafeteria/campus/list/',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/html',
                    }
                }

                const req = http.request(options, (res) => {
                    console.log("#0 : ", res);
                    resolve(res.statusCode);
                });

                req.on('error', (e) => {
                    reject(e.message);
                });

                req.end();
            })
        }catch (err) {
            console.log("#1err : ", err);
        }
        console.log("#1", aa)
        console.log("--------------------------")
        res.status(statusCode.OK).json(responseUtil.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {}))
    },
    /**
     * 회원가입
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    join: async (req, res, next) => {

    }
}

module.exports = userController;