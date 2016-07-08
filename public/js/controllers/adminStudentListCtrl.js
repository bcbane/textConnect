angular.module('app').controller('adminStudentListCtrl', function($scope, $sce, $state, modalService, adminStudentService) {

    $scope.students = adminStudentService.students;

    $scope.infoModal = false;

    $scope.modalOff = function() {

        $scope.modalOn = false;

    }

    $scope.infoModalOff = function() {

        $scope.infoModal = false;

    }

    modalService.getModalInfo('newStudentTmpl').then(function(res) {
        $scope.modalSkel = $sce.trustAsHtml(res.data)
    })

    $scope.getGroups = function() {

        adminStudentService.getGroups().then(function(response) {

            $scope.groups = response.data;

        });

    }

    $scope.getStudents = function() {

        adminStudentService.getStudents().then(function(response) {

            $scope.students = response.data;

        })

    }

    $scope.createStudent = function (student, contact) {

      $scope.newStudent = {
        name: student.name,
        contact: [
          {
            name: contact.name,
            phone: contact.phone,
            relationship: contact.relationship
          }
        ]
      }

      $scope.addStudent($scope.newStudent, $scope.groups.group);

    }


    $scope.addStudent = function(newStudent, groups) {


        adminStudentService.addStudent(newStudent, groups).then(function(response) {

            if (response) {

                $scope.modalOn = false;

                $scope.getStudents();

            }
        })

    }

    $scope.openModal = function(student) {

        console.log(student);

        $scope.studentSel = student;

        $scope.infoModal = true;

    }


})
