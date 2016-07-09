angular.module('app').controller("homeCtrl", function($scope, $state) {


  $scope.menuOnr = function () {

    $scope.menuOn = !$scope.menuOn;


  }

  $scope.menuSignup = function () {

    $state.go('signup');

    menuOnr();

  }

  $scope.menuLogin = function () {

    $state.go('login');

    menuOnr();

  }






})
