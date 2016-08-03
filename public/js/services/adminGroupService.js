angular.module('app').service('adminGroupService', function($http){

  this.groups;

  this.getGroups = function () {

    return $http({
      method: 'GET',
      url: '/api/groups'
    })
  }

  this.addGroups = function (newGroup) {

    return $http({
      method : 'POST',
      url: '/api/groups',
      data: newGroup
    }).then(function (response) {

      return response;

    })

  }


})
