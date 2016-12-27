/**
 * Created by Jyothi on 6/12/16.
 */

'use strict';

import angular from 'angular'
import 'angular-ui-router'
import 'angular-ui-bootstrap'

import './directives/todoDirective';
import './controllers/todoController';

angular.module('todo', ['ui.router', 'ui.bootstrap', 'todoControllerModule', 'todoDirectiveModule'])

    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('todo', {
                url: '/',
                templateUrl: 'templates/todo/todo.html',
                controller: 'TodoController'
                //controllerAs: 'todoCtrl'
            })
    });

