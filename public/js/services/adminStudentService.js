angular.module('app').service('adminStudentService', function($http){

  this.students;

  this.getGroups = function () {

    return $http({
      method: 'GET',
      url: '/api/groups'
    })
  }

  this.getStudents = function () {

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/students'
    })
  }

  this.addStudent = function (newStudent, groups) {

    return $http({
      method : 'POST',
      url: '/api/students',
      data: {
        newStudent: newStudent,
        groups :  groups
      }
    }).then(function (response) {

        return response;

    })
  }


})
