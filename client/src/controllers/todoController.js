/**
 * Created by Jyothi on 10/12/16.
 */

'use strict';

var todoControllerModule = angular.module('todoControllerModule', [])
    .controller('TodoController', function ($scope){
        console.log("Todo controller");
        $scope.todoList = [{
            name: 'first todo'
        },{
            name: 'second todo'
        }];
    });

export default todoControllerModule;

