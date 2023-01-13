const express = require('express');
const Event = require("../event/event");
const router = express.Router();

/**
 * 이벤트 함수
 */
router.get("/test", (req, res) => {
    res.send("event 함수 테스트");
    //  이벤트 강제 발생
    Event.eventTest.emit("test", "aaaaaaaaa");

    //  문자전송 이벤트
    Event.smsSend.emit("smssend", {"phone": "01066868286", "msg": "smesend event"});

    //  모든 이벤트 핸들러 제거
    Event.smsSend.removeAllListeners();

})

module.exports = router;