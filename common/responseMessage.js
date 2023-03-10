// common/responseMessage.ts -> response message 가공
message = {
    NULL_VALUE: '필요한 값이 없습니다.',
    NOT_FOUND: '존재하지 않는 자원',
    BAD_REQUEST: '잘못된 요청',
    INTERNAL_SERVER_ERROR: '서버 내부 오류',

    // 포스팅 조회
    READ_POST_SUCCESS: '포스팅 조회 성공',
    CREATE_POST_SUCCESS: '포스팅 생성 성공',
    DELETE_POST_SUCCESS: '포스팅 삭제 성공',
    UPDATE_POST_SUCCESS: '포스팅 수정 성공',

    // 결제성공
    PAY_SUCCESS: '결제 성공',

    // 로그인, 회원가입
    LOGIN_SUCCESS: '로그인 성공',
}

module.exports = message;