'use strict';

angular.module("myApp.AddTask", [
    'ngRoute',
])

    .config(
        function($routeProvider,$httpProvider, jwtOptionsProvider) {

            $routeProvider.when('/projects/:id/addTask', {
                templateUrl: 'Components/AddTask/ViewAddTask.html',
                controller: 'ViewAddTaskCtrl'
            });
        })

    .controller('ViewAddTaskCtrl', ["$scope",'apiTasksCalls','apiUserCalls',"$location","$routeParams",
        function($scope,apiTasksCalls,apiUserCalls,$location,$routeParams) {

            var pId = $routeParams.id

            var getProgOnSuccess = function (data){
                $scope.programmers = data;
            }

            var getProgOnError = function (reason){
                console.log(reason);
                $scope.error = reason;
            }

            var submitOnSuccess = function (data){
                $location.path('/projects/'+pId);
            }

            var submitOnError = function (reason){
                console.log(reason);
                $scope.error = reason;
            }

            apiUserCalls.getUserByRole("Programador").then(getProgOnSuccess,getProgOnError);

            $scope.onSubmitTask = function (task){
                console.log(task);
                apiTasksCalls.createTask(task,pId).then(submitOnSuccess,submitOnError);
            }
        }]);