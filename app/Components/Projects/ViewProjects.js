'use strict';

angular.module("myApp.Projects",[
    'ngRoute',
    'swxLocalStorage',

])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'Components/Projects/ViewProjects.html',
        controller: 'ViewProjectsCtrl'
    });
}])

.controller('ViewProjectsCtrl',["$scope",'$localStorage','apiProjectsCalls',"$location",
    function ($scope,$localStorage,apiProjectsCalls,$location){

    var onSuccess = function (data){
        $scope.projects = data;
    }

    var onError = function (reason){
        console.log(reason);
        $scope.error = reason;
    }

    apiProjectsCalls.getUserProjects().then(onSuccess,onError);

    $scope.clickRow = function (id){
        $location.path('/projects/'+ id);
    }

    $scope.submit = function (){
        $location.path('/addProject');
    }
}])