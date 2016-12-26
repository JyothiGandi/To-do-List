/**
 * Created by Jyothi on 11/12/16.
 */

'use strict';

let todoModel = require('../model/todoModel');
let errorService = require('../services/errorService');

module.exports = {

    getTodo (req, res, next) {
        todoModel.getTodoList()
            .then(todoList => res.json(todoList))
            .catch(err => next(err));
    },

    addTodo (req, res, next) {
        let data = req.body;
        if(!data.title || !data.description)  throw errorService.customError(400, 'MISSING_PARAMS');
        todoModel.addTodoList(data)
            .then(todoList => res.json(todoList))
            .catch(err => next(err));
    }
};