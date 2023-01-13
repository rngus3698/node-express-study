/**
 * callback 함수
 */

exports.callbackTest = (a, b, callback) => {
    setTimeout(() => {
        console.log("timeout start");
    }, 1000)

    console.log("timeout end");
    callback(a+b);
}