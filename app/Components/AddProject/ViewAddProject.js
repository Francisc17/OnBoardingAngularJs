'use strict';

angular.module("myApp.AddProject", [
    'ngRoute',
])

    .config(
        function($routeProvider,$httpProvider, jwtOptionsProvider) {

            $routeProvider.when('/addProject', {
                templateUrl: 'Components/AddProject/ViewAddProject.html',
                controller: 'ViewAddProjectCtrl'
            });
        })

    .controller('ViewAddProjectCtrl', ["$scope",'apiProjectsCalls',"$location",
        function($scope,apiProjectsCalls,$location) {

            var onSuccess = function (data){
                $location.path('/projects');
            }

            var onError = function (reason){
                console.log(reason);
                $scope.error = reason;
            }

            $scope.submit = function (project){
                apiProjectsCalls.createProject(project).then(onSuccess,onError);
            }
        }]);