const express = require('express'); // 로드
const router = express.Router();    // 함수형 모듈로 사용하여 객체 선언

/**
 * /test 경로에 대한 모든 유형의 http 요청에 대해 실행됨
 */
router.get('/test', (req, res, next)=> {
    console.log("/test 경로에 대한 모든 유형의 http 요청에 대해 실행됨")
    next();
})

/**
 * 특정 middleware
 * @param req
 * @param res
 * @param next
 */
const cb1 = (req, res, next) => {
    console.log("call back 1");
    next()
}

const cb2 = (req, res, next) => {
    console.log("call back 2");
    next()
}

/**
 * middleware.js 모듈에서만 적용됨 * event, responseModule router에서는 적용 안됨
 */
router.use((req, res, next) => {
    console.log("Time : ", Date.now());
    next('route');
})

/**
 *
 */

router.get("/test", [cb1, cb2], (req, res) => {
    res.send("middleware test")
})

router.get("/test2", (req, res, next) => {
    console.log("Request URL : ", req.originalUrl);
    next();
}, (req, res ,next) => {
    console.log("Request Type : ", req.method);
    next();
}, (req, res) => {
    console.log("last");
    res.send("last")
})



router.get("/err/test", (req, res, next) => {
    try{
        throw "new Exception";
    }catch (err) {
        console.log("err: ", err);
        err.message = err;
        err.status = 501;
        next(err);
    }
})

/**
 * 에러 처리 미들웨어
 */

router.get("/err/test2",
    (req, res, next) => {
    console.log("originalUrl : ", req.originalUrl);
    console.log("baseUrl : ", req.baseUrl);     // 애플리케이션 미들웨어를 동작 app.use('/middleware', middlewareRouter)
    console.log("path : ", req.path);           // 라우터 미들웨어를 동작 router.get('/err/test2', (req, res) => {})
    console.log("err/test2");
    next();
}, (req, res, next) => {
    throw new Error("에러 발생");
})

// router.use((err, req, res, next) => {
//     console.log(err);
//     res.send("에러났지만 나만 볼 수 있다.");
// })

// const responseModule = require("./test");
// router.use('/:paramsId/response-module', responseModule); // router 객체에도 하위 라우터를 use 함수로 연결하여 사용할 수 있다.

module.exports = router     // 라우터 사용