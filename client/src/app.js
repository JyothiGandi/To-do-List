/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

import angular from 'angular'
import 'angular-ui-router'

import './controllers/todoController';

angular.module('todo', ["ui.router", "todoControllerModule"])

    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('todo', {
                url: '/',
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
                //controllerAs: 'todoCtrl'
            })
    });

