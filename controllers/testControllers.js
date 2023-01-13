
// import util from "../modules/util";
// import responseMessage from "../modules/responseMessage";
// import statusCode from "../modules/statusCode";

const util = require("../modules/util");
const message = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const functionalProgramming = require("../common/functionalProgramming");
const callback = require("../common/callback");
const firesbaseAppPushSend = require("../modules/firebaseAppPushSend");
const testService = require("../services/testService");

testController = {
    test1: async (req, res, next) => {
        // 조회 service
        const testmodel = await testService.testSelect();

        // 수정 service
        const testUpdate = await testService.testUpdate();

        // 응답 정보 포맷 모듈화
        res.status(statusCode.OK).send(util.success(statusCode.OK, message.CREATE_POST_SUCCESS, testmodel));
        // res.status(statusCode.statusCode.CREATED).send(util.util.success(statusCode.statusCode.OK, responseMessage.message.CREATE_POST_SUCCESS, data));


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