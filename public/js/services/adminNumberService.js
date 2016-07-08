angular.module('app').service('adminNumberService', function($http){

  this.numbers;

  this.getNumbers = function () {


    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/numbers'
    })
  }

  this.addNumber = function (number) {

    console.log(number);

    return $http({
      method : 'POST',
      url: 'http://localhost:3000/api/numbers',
      data: number
    }).then(function (response) {

      return response;

    })

  }

})
