/**
 * firebase App Push 보내기
 */

/**
 * npm install firebase-admin --save
 * firebase -> 프로젝트 설정 -> 서비스 계정 -> Admin SDK Node.js로 새 비공개 키 생성 다운로드
 * 프로젝트에 .json 파일로 등록
 */

const admin = require('firebase-admin');

exports.appPush = (targetToken, title, body) => {

    const message = {
        data: {
            title: title,
            body: body,
            style: "굳굳",
        },
        token: targetToken,
    }

    admin
        .messaging()
        .send(message)
        .then((response) => {
            console.log("SuccessFully sent message : ", response);
        })
        .catch((err) => {
            console.log("Error sending message!! : ", err);
        })
}