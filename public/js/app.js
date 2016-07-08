angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


    $stateProvider.state('home', {

            url: '/',
            templateUrl: "html/ui-views/home.html",
            controller: "homeCtrl"

        })
        .state('signup', {

            url: '/signup',
            templateUrl: "html/ui-views/createAccount.html",
            controller: "createAccountCtrl"

        })
        .state('login', {

            url: '/login',
            templateUrl: "html/ui-views/login.html",
            controller: "loginCtrl"

        })
        .state('admin', {

            url: '/admin',
            templateUrl: "html/ui-views/admin/adminHome.html",
            controller: "adminCtrl"

        })
        .state('admin.adminInfo', {

            templateUrl: "html/ui-views/admin/adminHome.adminInfo.html",
            controller: "adminCtrl"

        })
        .state('admin.users', {

            templateUrl: "html/ui-views/admin/adminHome.userList.html",
            controller: "adminUserListCtrl"

        })
        .state('admin.groups', {

            templateUrl: "html/ui-views/admin/adminHome.groupList.html",
            controller: "adminGroupListCtrl"

        })
        .state('admin.students', {

            templateUrl: "html/ui-views/admin/adminHome.studentList.html",
            controller: "adminStudentListCtrl"

        })
        .state('admin.numbers', {

            templateUrl: "html/ui-views/admin/adminHome.numbers.html",
            controller: "adminNumberListCtrl"

        })
        .state('user', {

            url: '/user',
            templateUrl: "html/ui-views/user/userHome.html",
            controller: "userCtrl"

        })
        .state('user.userInfo', {

            templateUrl: "html/ui-views/user/userHome.userInfo.html",
            controller: "userCtrl"

        })
        .state('user.sendMessage', {

            templateUrl: "html/ui-views/user/userHome.sendMessage.html",
            controller: "userSendMessageCtrl"

        })
        .state('user.history', {

            templateUrl: "html/ui-views/user/userHome.history.html",
            controller: "userHistoryCtrl"

        })
        .state('user.groupList', {

            templateUrl: "html/ui-views/user/userHome.groupList.html",
            controller: "homeCtrl"

        })
        .state('user.studentList', {

            templateUrl: "html/ui-views/user/userHome.studentList.html",
            controller: "userStudentCtrl"

        })


});
