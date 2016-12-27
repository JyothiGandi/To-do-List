/**
 * Created by Jyothi on 26/12/16.
 */

'use strict';

let todoDirectiveModule = angular.module('todoDirectiveModule', [])
    .directive('myModal', function(){
        return {
            restrict: 'E',
            transclude: true,
            //scope: { title:'@' },
            templateUrl: 'templates/common/todoModal.html'
        }
    });

export default todoDirectiveModule;