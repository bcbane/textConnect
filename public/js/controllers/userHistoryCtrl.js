angular.module('app').controller('userHistoryCtrl', function($scope, userHistoryService, loginService)  {



$scope.getHistory = function () {

  userHistoryService.getHistory($scope.history).then(function (response) {

    console.log(response.data);

  })

}

$scope.fillGroups = function () {

  $scope.groups = loginService.userUser.groups;

}

})
