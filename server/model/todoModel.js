/**
 * Created by Jyothi on 11/12/16.
 */

'use strict';

let mongoUtil = require('../config/mongoUtil');

module.exports = {

    getTodoList () {
        return new Promise(function (resolve, reject) {
            let Todo = mongoUtil.todo();
            Todo.find().toArray((err,docs) => {
                if(err) return reject(err);
                return resolve(docs);
            });
        });
    },

    addTodoList (data) {
        return new Promise(function (resolve, reject) {
            let Todo = mongoUtil.todo();
            Todo.insertOne(data, function(err, doc) {
                if(err) return reject(err);
                return resolve(doc);
            });
        });
    }
};