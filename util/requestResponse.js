module.exports = function response(data, status, message) {
    return ({
        data,
        meta: {
            status,
            msg: message
        }
    })
}