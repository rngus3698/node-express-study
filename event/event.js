const EventEmitter = require('events'); //  event 모듈 사용

const customEvent = new EventEmitter(); //  객체 생성

//  이벤트 등록

//  문자발송등에 사용할 수 있음
exports.eventTest = customEvent.on('test', (aa) => {
    console.log("event");
    console.log("aa : ", aa);
});

exports.smssend = customEvent.on('smssend', ({phone, msg}) => {
    console.log("smssend");
    console.log("phone : ", phone);
    console.log("msg : ", msg);
})
