// const express = require('express');
// const router = express.Router();

const {Router} = require('express');
const router = Router({mergeParams: true});
const testControllers = require("../controllers/testControllers");
const testValidator = require("../validators/testValidator");

/**
 * 응답 정보 모듈화
 */

/**
 * middleware -> responseModule
 * 계층적 구조의 라우터를 사용할 때, 라우터의 선언 시 Router({mergeParams: true}) 를 사용해야,
 * 이전 라우터에서 전달된 path parameter 를 사용할 수 있다.
 */

/**
 * endpoint : {baseURL}/middleware/:userId/response-module/test
 * Router({mergeParams: true})를 사용하지 않으면 /test 라우터 계층에서 :userId parameter 를 사용할 수 없습니다.
 */

/**
 * Request 객체
 * Http 요청 정보를 가진 객체
 * Http 요청의 path parameter, query parameter, body, header 등을 확인 가능
 * req.params : URL 표현 중 /path/:id 에서 :id 를 req.params.id 로 사용할 수 있다.
 * req.queries : URL 표현 중 /path?page=2에서 page 부분을 req.queries.page 로 사용할 수 있다.
 * req.body : 일반적으로 POST 요청의 요청 데이터를 담고 있다. req.body 에 요청 데이터가 저장되어 들어온다.
 * req.get('') : Http Request 의 헤더 값을 가져올 수 있다. req.get('Authorization')등으로 값을 가져온다.
 */

// testControllers.test1 : Request Handler
// testValidator.chapter1 : 요청 데이터 유효성 체크
router.get("/", testValidator.chapter1, testControllers.test1);



















router.get("/request/test", (req, res) => {

    // req.params : URL 표현 중 /path/:id 에서 :id 를 req.params.id 로 사용할 수 있다.
    const paramsId = req.params.paramsId;
    console.log("paramsId : ", paramsId);

    // req.queries : URL 표현 중 /path?page=2에서 page 부분을 req.queries.page 로 사용할 수 있다.
    const queries = req.query;
    console.log("queries : ", queries);

    // req.body : 일반적으로 POST 요청의 요청 데이터를 담고 있다. req.body 에 요청 데이터가 저장되어 들어온다.
    const body = req.body;
    console.log("body : ", body);

    // req.get('') : Http Request 의 헤더 값을 가져올 수 있다. req.get('Authorization')등으로 값을 가져온다.
    // 토큰정보 가져오기
    const Authorization = req.get('Authorization');
    console.log("Authorization: ", Authorization);

    res.set({"header test": "header test"});

    res.send("request test");
})

module.exports = router;