/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

let todoController = require('../controller/todoController');
let baseUrl = `/api/v1`;

module.exports = (app) => {

    /**
     * Routes
     */

    app.get(`${baseUrl}/todo`, todoController.getTodo);
    app.post(`${baseUrl}/todo`, todoController.addTodo);

};