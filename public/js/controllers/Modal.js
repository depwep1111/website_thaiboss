angular.module('appModal', [])
.controller('modal.confirm',['$scope', '$uibModalInstance','data',function($scope, $uibModalInstance,data)
{
    $scope.data=data;
    $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);