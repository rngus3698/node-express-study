/**
 * response format common module
 */

util = {
    success: (status, message, data) => {
        return {
            status,
            result: true,
            message,
            data,
        };
    },
    fail: (status, message, data) => {
        return {
            status,
            result: false,
            message,
        };
    }
};

module.exports = util;