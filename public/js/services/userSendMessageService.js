angular.module('app').service('userSendMessageService', function($http){

  this.sendM = function (params) {
    console.log(params);
    return $http({
      method : 'POST',
      url: '/sendm',
      data: params
    })
  }

  this.saveM = function (params, id) {

    return $http({
      method : 'POST',
      url: '/api/savem',
      data: {
        params: params,
        id :  id
      }
    })

  }

  this.getNumbers = function () {

    return $http({
      method: 'GET',
      url: '/api/numbers'
    })

  }

})
