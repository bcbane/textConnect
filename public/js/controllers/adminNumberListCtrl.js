angular.module('app').controller('adminNumberListCtrl', function($scope, $sce, modalService, adminNumberService)  {

    $scope.numbers = adminNumberService.numbers;

    $scope.modalOff = function() {

        $scope.modalOn = false;

    }

    modalService.getModalInfo('newPhoneTmpl').then(function(res) {
        $scope.modalSkel = $sce.trustAsHtml(res.data)
    })

    $scope.addNumber = function (number) {

      adminNumberService.addNumber(number).then(function (response) {

        if(response) {

          $scope.modalOn = false;

          $scope.getNumbers();

        }

      })

    }

    $scope.getNumbers = function () {

      adminNumberService.getNumbers().then(function (response) {

        $scope.numbers = response.data;


      })

    }


})
