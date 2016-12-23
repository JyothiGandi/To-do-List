/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let todoController = require('../controller/todoController');

module.exports = (app) => {

    /**
     * Routes
     */

    app.get('/todo', todoController.getTodo);

};