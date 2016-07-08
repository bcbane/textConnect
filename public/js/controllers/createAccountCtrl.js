angular.module('app').controller('createAccountCtrl', function ($scope, $state, createAccountService) {


$scope.signup = function () {

  createAccountService.signup($scope.admin).then(function (response) {

    if (response === "account creation unsuccessful") $scope.creation = "account creation unsuccessful";
    else {
      $scope.creation = "account created successfully";
      $state.go('login');
    }
  })

}

})
