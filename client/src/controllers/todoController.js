/**
 * Created by Jyothi on 10/12/16.
 */

'use strict';

import { TodoClass } from '../services/todoService';

let todoControllerModule = angular.module('todoControllerModule', [])
    .controller('TodoController', function ($scope){

        $scope.todoList = [];

        let init = function () {
            let todoClass = new TodoClass();
            todoClass.getTodoList()
                .then(todo => {
                    $scope.todoList = todo
                })
                .catch(err => {
                    console.log("ERR", err);
                });
        };

        init();

    });

export default todoControllerModule;

