/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

module.exports = (app) => {

    /**
     * Routes
     */

    app.get('/', (req, res, next) => {
        res.send('<html><h3>TO-DO List</h3></html>');
    });

};