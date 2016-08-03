angular.module('app').service('userHistoryService', function($http){

this.getHistory = function (number) {


  return $http({
    method : 'GET',
    url: '/api/history/' + number
  })

}

})
