const testModel = require("../models/testModel");

testService = {
    /**
     * 비즈니스 로직
     * @returns {Promise<*>}
     */
    testSelect: async () => {
        /**
         * 1. 함수형 프로그래밍에서의 데이터는 변하지 않는 불변성을 유지해야 한다.
         * 2. 데이터의 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터 의 복사본을 만들어서 그 일부를 변경하고, 변경한 복사본을 사용해 작업을 진행합니다.
         */

        const testmodel = await testModel.select();
        console.log("testModel : ", testmodel)
        /**
         * value : 현재요소
         * index : 요소의 인덱스
         * array : map()을 호출한 원본 배열
         */
        const testmodelModify = await testmodel.map((value, index, array) => {
            return {...value, useyn: 'N'};
        })
        console.log("testmodel : ", testmodel);
        console.log("testmodelModify : ", testmodelModify);
        return testmodelModify;
    },
    testUpdate: async () => {
        /**
         * connection 생명주기 테스트
         * update() 에서 transaction 시작
         * update() connection 응답
         * update2() 에서 해당 connection commit, release 가능
         * @type {unknown}
         */
        const testUpdate = await testModel.update();

        // testUpdate에서 선언했던 transaction commit 및 release
        const testUpdate2 = await testModel.update2(testUpdate.connection);

        return true;
    }
}

module.exports = testService;