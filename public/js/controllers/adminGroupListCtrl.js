angular.module('app').controller('adminGroupListCtrl', function($scope, $sce, $state, modalService, adminGroupService) {

    $scope.groups = adminGroupService.groups;

    $scope.modalOff = function() {

        $scope.modalOn = false;

    }

    modalService.getModalInfo('newGroupTmpl').then(function(res) {
        $scope.modalSkel = $sce.trustAsHtml(res.data)
    })


    $scope.getGroups = function () {

      adminGroupService.getGroups().then(function (response){

        $scope.groups = response.data;

      })

    }

    $scope.addGroups = function (newGroup) {

      adminGroupService.addGroups(newGroup).then(function (response) {

        if(response){

           $scope.modalOn = false;

           $scope.getGroups();

         }
      })

    }



})
