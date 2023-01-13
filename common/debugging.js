console.log("debugging.js")

consoleLog = (txt, data) => {
    if (process.env.NODE_ENV !== "prod") {
        console.log(txt);
        console.log(data);
    }
}

module.exports = consoleLog