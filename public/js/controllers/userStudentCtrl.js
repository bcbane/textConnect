angular.module('app').controller('userStudentCtrl', function($scope, $sce, modalService)  {

    $scope.modalOff = function() {

        $scope.modalOn = false;

    }

    modalService.getModalInfo('studentInfoTmpl').then(function(res) {
        $scope.modalSkel = $sce.trustAsHtml(res.data)
    })


})
