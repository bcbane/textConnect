angular.module('app').service('loginService', function($http){


this.signInAdmin = function (adminLoginReq) {

  return $http({
    method : 'GET',
    url: 'http://localhost:3000/api/admins/' + adminLoginReq.email + '/' + adminLoginReq.password
  })

}

this.adminUser;

this.signInUser = function (userLoginReq) {

  return $http({
    method : 'GET',
    url: 'http://localhost:3000/api/users/' + userLoginReq.username + '/' + userLoginReq.password
  })

}

this.userUser;


})
