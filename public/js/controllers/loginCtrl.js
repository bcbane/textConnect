angular.module('app').controller('loginCtrl', function ($scope,$state, loginService) {

$scope.adminLogin = function () {


  loginService.signInAdmin($scope.adminLoginReq).then(function (response) {

    loginService.adminUser = response.data;

    if(response) $state.go('admin.adminInfo');

  })

}

$scope.userLogin = function () {


  loginService.signInUser($scope.userLoginReq).then(function (response) {

    loginService.userUser = response.data;

    if(response) $state.go('user.userInfo');

  })

}




})
