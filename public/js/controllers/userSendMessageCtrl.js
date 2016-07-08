angular.module('app').controller('userSendMessageCtrl', function($scope, userSendMessageService, loginService)  {

$scope.sendM = function () {

  $scope.params = {
    src : $scope.srcSel.number,
    dst : $scope.contactSel.phone,
    text: $scope.text,
    url: 'http://example.com/report/',
    method : 'GET'
  }

  $scope.studentID = $scope.studentSel._id;


  userSendMessageService.sendM($scope.params).then(function (response) {

    console.log(response);

  })

  userSendMessageService.saveM($scope.params, $scope.studentID).then(function (response) {

    console.log(response);

  })

}

  $scope.fillNumbers = function () {

    $scope.numbers = userSendMessageService.numbers;

  }

  $scope.fillGroups = function () {

    $scope.groups = loginService.userUser.groups;

  }



// $scope.getNumbers = function () {
//
//   userSendMessageService.getNumbers().then(function (response) {
//
//     console.log(response);
//
//   })
//
// }

})
