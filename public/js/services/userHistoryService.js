angular.module('app').service('userHistoryService', function($http){

this.getHistory = function (number) {


  return $http({
    method : 'GET',
    url: 'http://localhost:3000/api/history/' + number
  })

}

})
