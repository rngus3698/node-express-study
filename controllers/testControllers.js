console.log("testControllers.js");
// import util from "../common/util";
// import responseMessage from "../common/responseMessage";
// import statusCode from "../common/statusCode";

const util = require("../common/responseUtil");
const message = require("../common/responseMessage");
const statusCode = require("../common/statusCode");
const functionalProgramming = require("../common/functionalProgramming");
const firesbaseAppPushSend = require("../common/firebaseAppPushSend");
const testService = require("../services/testService");

testController = {
    test1: async (req, res, next) => {
        try{
            // 조회 service
            const testmodel = await testService.testSelect();
            consoleLog("testmodel : ", testmodel);
            // 수정 service
            const testUpdate = await testService.testUpdate();

            // 응답 정보 포맷 모듈화
            res.status(statusCode.OK).send(util.success(statusCode.OK, message.CREATE_POST_SUCCESS, testmodel));
            // res.status(statusCode.statusCode.CREATED).send(util.util.success(statusCode.statusCode.OK, responseMessage.message.CREATE_POST_SUCCESS, data));
        } catch (err) {
            consoleLog("err : ", err.message);
            res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
        }

        /*
        // console.log("path : ", req.path)
        // console.log("req.query : ", req.query);
        // console.log("Userid: ", req.params);

        const person = {name: 'sangwon', age: "29"};
        // console.log("person : ", person);
        // console.log(await testControllers.increaseAge(person));

        let numbers = [1,2,3];
        const aa = await functionalProgramming.multiply(number=numbers, multiplier=2);
        // console.log(numbers);
        // console.log(aa);

        callback.callbackTest(5, 10, (res) => {
            console.log("callback testControllers : ", res);

            console.log("callback Test End")
        })

        // firesbaseAppPushSend.appPush();
         */
    }
}

module.exports = testController;