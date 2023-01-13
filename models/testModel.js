const getConnection = require("../modules/db");

/**
 *
 * insert SQL을 좀 더 쉽게 만드는 방법
 *
 * var clubMberObj = {
 *   CLUB_SN : clubSn,
 *   MBER_NM : mberNm,
 *   MBER_SN : mberSn,
 *   MNGR_YN : 'Y',
 *   PROFILE_IMAGE : profileImage
 * };
 *
 * //클럽회원 저장
 * var sql = "INSERT INTO CLUB_MBER SET ? "
 */

/**
 * 다중쿼리
 * ******* 무조건 query문 내에 ; 세미콜론을 추가해서 구분해주도록하자.
 * var sql1 = 'SELECT CLUB_NM FROM CLUB; '; // 클럽목록
 * var sql2 = 'SELECT MBER_NM FROM CLUB_MBER; '; // 클럽회원
 *
 * dbconn.query(sql1 + sql2, function(err, results, field){
 *   var sql1_result = results[0];	//sql1 의 결과값
 *   var sql2_result = results[1];	//sql2 의 결과값
 *
 * 	...
 * });
 *
 * 한 번에 여러 파라미터를 매핑해서 다중 쿼리를 처리하는 예제
 * var cnfrncInfo = req.body.cnfrncInfo;    //대회정보
 * var partcptMberArr = req.body.partcptMberArr; //대회참가자정보
 * var cnfrncGgArr = req.body.cnfrncGgArr;    //대회경기정보
 *
 * var sql1 = 'INSERT INTO CNFRNC SET ? ;';
 * var sql1s = mysql.format(sql1, cnfrncInfo);
 *
 * var sql2 = 'INSERT INTO CNFRNC_PARTCPT_MBER SET ?;';
 * var sql2s = "";
 * partcptMberArr.forEach(function(item){
 * 	sql2s += mysql.format(sql2, item);
 * });
 *
 * var sql3 = 'INSERT INTO CNFRNC_GG SET ?;';
 * var sql3s = "";
 * cnfrncGgArr.forEach(function(item){
 * 	sql3s += mysql.format(sql3, item);
 * });
 */

/**
 *
 * @returns {Promise<unknown>}
 */
testModel = {
    select: async () => {
        try {

            const connection = await getConnection();   // 미리 만들어논 connection 가져옴
            const sql = `select * from category where categoryname=?;`; // query
            const params = [    // sql의 '?'에 순서대로 매핑
                '식사'
            ]

            return new Promise((resolve, reject) => {
                connection.query(sql, params, (err, rows) => {
                    if (!err) {
                        resolve(rows);
                    } else {
                        reject(err);
                    }
                });
                connection.release();
            });

        }catch (err) {
            return err;
        }
    },
    update: async () => {
        try{
            const connection = await getConnection();
            const updateQeury = `update category set useyn='Y' where categorypkey=1;`;
            const params = [

            ]

            connection.beginTransaction();

            return new Promise((resolve, reject) => {
                connection.query(updateQeury, params, (err, rows) => {
                    if (!err) {
                        resolve({rows: rows, connection: connection});
                    } else {
                        reject(err);
                    }
                })
            })

        }catch (err) {
            return err;
        }
    },
    update2: async (connection) => {
        await connection.commit();
        await connection.release();
        return true;
    }
}

module.exports = testModel;