'use strict';

angular.module("myApp.Tasks",[
    'ngRoute',
    'swxLocalStorage',

])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tasks', {
            templateUrl: 'Components/Tasks/ViewTasks.html',
            controller: 'ViewTasksCtrl'
        });
    }])

    .controller('ViewTasksCtrl',["$scope",'$localStorage','apiTasksCalls',"$location",
        function ($scope,$localStorage,apiTasksCalls,$location){

            var onSuccess = function (data){
                $scope.tasksProgrammer = data;
            }

            var onError = function (reason){
                console.log(reason);
                $scope.error = reason;
            }

            $scope.changeTaskState = function (task,state){
                apiTasksCalls.changeTaskState(task.id,{
                    taskName: task.taskName,
                    deadline: task.deadline,
                    state: state
                })
            }

            apiTasksCalls.getProgrammerTasks().then(onSuccess,onError);

            $scope.clickRow = function (id){
                $location.path('/tasks/'+ id);
            }
        }])