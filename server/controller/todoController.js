/**
 * Created by Jyothi on 11/12/16.
 */

'use strict';

let todoModel = require('../model/todoModel');

module.exports = {
    getTodo (req, res, next) {
        todoModel.getTodoList()
            .then(function (todoList) {
                return res.json(todoList);
            })
            .catch(function (err) {
                return res.status(500).send({
                    message: err
                });
            });
    }
};