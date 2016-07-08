angular.module('app').controller('adminUserListCtrl', function($scope, $sce, $compile, $state, modalService, adminUserService) {


    $scope.users = adminUserService.users;


    $scope.modalOff = function() {

        $scope.modalOn = false;

    }

    modalService.getModalInfo('newUserTmpl').then(function (res) {
      $scope.modalSkel=$sce.trustAsHtml(res.data)
    })

    $scope.getGroups = function() {

        adminUserService.getGroups().then(function(response) {

            $scope.groups = response.data;

        });

    }

    $scope.getUsers = function () {

      adminUserService.getUsers().then(function (response) {

        $scope.users = response.data;


      })

    }

    $scope.addUser = function(newUser, groups) {


        adminUserService.addUser(newUser, groups).then(function(response) {

            if (response) {

                $scope.modalOn = false;

                $scope.getUsers();

            }
        })

    }




})
