angular.module('app').controller('userCtrl', function ($scope, loginService, $state, userSendMessageService) {

  if (!loginService.userUser){
    $state.go('login');
  }
  else $scope.userUser = loginService.userUser;


  $scope.logout = function () {

    loginService.userUser = {};

    $state.go('login');

  };

  $scope.sendMessage = function () {

      userSendMessageService.getNumbers().then(function (response) {

        userSendMessageService.numbers = response.data;

      });

      $state.go('user.sendMessage');

  }

  $scope.fillGroups = function () {

    $scope.groups = loginService.userUser.groups;

  }

})
