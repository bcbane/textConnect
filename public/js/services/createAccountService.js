angular.module('app').service('createAccountService', function($http){

this.signup = function (admin) {
  console.log(admin);
  return $http({
    method : 'POST',
    url: '/api/admins',
    data: admin
  })
}

})
