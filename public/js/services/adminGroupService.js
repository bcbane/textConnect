angular.module('app').service('adminGroupService', function($http){

  this.groups;

  this.getGroups = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/groups'
    })
  }

  this.addGroups = function (newGroup) {

    return $http({
      method : 'POST',
      url: 'http://localhost:3000/api/groups',
      data: newGroup
    }).then(function (response) {

      return response;

    })

  }


})
