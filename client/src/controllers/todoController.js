/**
 * Created by Jyothi on 10/12/16.
 */

'use strict';

import '../services/todoService';
import '../services/todoModalService'

let todoControllerModule = angular.module('todoControllerModule', ['todoServiceModule', 'todoModalServiceModule'])
    .controller('TodoController', function ($scope, $state, TodoService, TodoModalService){

        if ($state.current.name === 'todo') {
            $scope.todoList = [];

            let init = function () {
                TodoService.getTodoList()
                    .then(todoList => $scope.todoList = todoList)
                    .catch(err => console.log(err));
            };

            init();

            $scope.add = function () {

                TodoModalService.addModal($scope, 'ADD')

                /*TodoService.addTodo(data)
                    .then(resp => $scope.todoList.push(data))
                    .catch(err => alert(err));*/
            };


        }


    });

export default todoControllerModule;

