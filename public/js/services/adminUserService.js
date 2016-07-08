angular.module('app').service('adminUserService', function($http){

  // this.userAdded = 0;
  //
  this.users;

  this.getGroups = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/groups'
    })
  }

  this.getUsers = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users'
    })

  }

  this.addUser = function (newUser, groups) {

    return $http({
      method : 'POST',
      url: 'http://localhost:3000/api/users',
      data: {
        newUser: newUser,
        groups :  groups
      }
    }).then(function (response) {

        return response;

    })
  }

  // this.addUser = function (newUser) {
  //
  //   return $http({
  //     method : 'POST',
  //     url: 'http://localhost:3000/api/users',
  //     data: newUser
  //   }).then(function (response) {
  //
  //       return response;
  //
  //   })
  // }

})
