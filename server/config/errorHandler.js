/**
 * Created by Jyothi on 23/12/16.
 */

'use strict';

let errorService = require('../services/errorService');

module.exports = (app) => {

    app.use((_, __, next) => next(errorService.customError(404, 'NOT_FOUND')));

    app.use((err, req, res, next) => {
        let error = {
            status: err.status || 500,
            message: err.message || err.stack.split(/\s*\n\s*/,2).join(' ') || errorService.getErrorMsg('INTERNAL_SERVER_ERROR')
        };
        console.log("MY ERR ",error);
        return res.json(error.message);
        //return res.status(err.status).json(error.message);
    });
};