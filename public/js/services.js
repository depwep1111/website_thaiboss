angular.module('appServices', [])
.service('appAlert',['$uibModal','$http', function($uibModal,$http) {

    this.confirm=function(data,callback) {
        /*begin modal*/
        var modalInstance = $uibModal.open({
            templateUrl: '/views/modal/confirm.html',
            controller: 'modal.confirm',
            backdrop:'static',
            /*scope:$scope,*/
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modalInstance.result.then(function () {
            return callback(true);
        }, function () {
            return callback(false);
        });
        /*end modal*/
    };
}])
.service('appConfirm',['$uibModal','$http', function($uibModal,$http) {

    this.confirm=function(data,callback) {
        /*begin modal*/
        var modalInstance = $uibModal.open({
            templateUrl: '/views/modal/confirm1.html',
            controller: 'modal.confirm',
            backdrop:'static',
            /*scope:$scope,*/
            resolve: {
                data: function () {
                    return data;
                }
            }
        });
        modalInstance.result.then(function () {
            return callback(true);
        }, function () {
            return callback(false);
        });
        /*end modal*/
    };
}]);