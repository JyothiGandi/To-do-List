/**
 * Created by Jyothi on 26/12/16.
 */

'use strict';

let todoModalServiceModule = angular.module('todoModalServiceModule', [])
    .factory('TodoModalService',['$rootScope','$uibModal',function($rootScope,$uibModal){
        return{
            addModal($scope, type) {
                let modalInstance =  $uibModal.open({
                    templateUrl: 'myModalContent.html',
                    scope: $scope,
                    controller: function () {
                        $scope.modalTitle = type.toUpperCase();
                        $scope.errorMsg = '';
                        $scope.myelement = {};
                        $scope.disableButton = false;

                        $scope.cancel = function () {
                            modalInstance.dismiss('cancel');
                        };

                        $scope.ok = function () {
                            $scope.disableButton = true;
                        };
                    }
                });
            }
        }
    }]);


export default todoModalServiceModule;