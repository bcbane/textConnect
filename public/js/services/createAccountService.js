angular.module('app').service('createAccountService', function($http){

this.signup = function (admin) {
  console.log(admin);
  return $http({
    method : 'POST',
    url: 'http://127.0.0.1:3000/api/admins',
    data: admin
  })
}

})
