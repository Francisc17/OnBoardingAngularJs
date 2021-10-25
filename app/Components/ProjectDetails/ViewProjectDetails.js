'use strict';

angular.module("myApp.ProjectDetails",[
    'ngRoute'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects/:id', {
            templateUrl: 'Components/ProjectDetails/ViewProjectDetails.html',
            controller: 'ViewProjectDetailsCtrl'
        });
    }])

.controller('ViewProjectDetailsCtrl',["$scope",'$localStorage','apiProjectsCalls',"$routeParams","$location",
    function ($scope,$localStorage,apiProjectsCalls,$routeParams,$location){
    var onSuccess = function (data){
        console.log(data);
        $scope.projectDetails = data;
    }

    var onError = function (reason){
        $scope.error = reason;
    }

    var pId = $routeParams.id;

    apiProjectsCalls.getProjectDetails(pId).then(onSuccess,onError);

    $scope.clickRow = function (id){
        $location.path('/tasks/'+ id);
    }

    $scope.addTask = function (){
        $location.path('/projects/'+ pId +'/addTask');
    }

}]);
