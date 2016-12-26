/**
 * Created by Jyothi on 25/12/16.
 */

'use strict';

let errorMsgs = {
    'NOT_FOUND' : 'Not found',
    'MISSING_PARAMS' : 'Missing required parameters',
    'INTERNAL_SERVER_ERROR' : 'Oops! Error occurred.'
};

module.exports = {
    customError(status, errorType) {
        let msg = errorMsgs[errorType] || errorMsgs['INTERNAL_SERVER_ERROR'];
        let e = new Error(msg);
        e.status = status || 500;
        return e;
    },
    getErrorMsg(errorType) {
        return errorMsgs[errorType] || errorMsgs['INTERNAL_SERVER_ERROR'];
    }
};