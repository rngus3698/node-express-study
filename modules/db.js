const mysql = require('mysql');
const config = require("../conf/dbConfig.json");

const pool = mysql.createPool(config);

getConnection = async () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if(!err) {
                resolve(conn);
            }
            reject(err);
        });
    })
}

module.exports = getConnection;