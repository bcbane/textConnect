angular.module('app').controller('adminCtrl', function ($scope, loginService, $state, adminUserService, adminGroupService, adminStudentService, adminNumberService) {

// Turn this on after admin panel testing complete

if (!loginService.adminUser){
  $state.go('login');
}
else $scope.adminUser = loginService.adminUser;



$scope.logout = function () {

  loginService.adminUser = {};

  $state.go('login');

}


// // Turn this off after admin panel testing complete
// $scope.currentUser = loginService.currentUser;

$scope.getUsers = function () {

  adminUserService.getUsers().then(function (response) {

    adminUserService.users = response.data;

    $state.go('admin.users');

  })

}

$scope.getGroups = function () {

  adminGroupService.getGroups().then(function (response) {

    adminGroupService.groups = response.data;

    $state.go('admin.groups');

  })

}

$scope.getStudents = function () {

  adminStudentService.getStudents().then(function (response) {

    adminStudentService.students = response.data;

    $state.go('admin.students');

  })

}

$scope.getNumbers = function () {

  adminNumberService.getNumbers().then(function (response) {

    adminNumberService.numbers = response.data;

    $state.go('admin.numbers');

  })

}


})
