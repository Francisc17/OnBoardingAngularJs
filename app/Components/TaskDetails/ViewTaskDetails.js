'use strict';

angular.module("myApp.TaskDetails", ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/tasks/:taskId', {
            templateUrl: 'Components/TaskDetails/ViewTaskDetails.html',
            controller: 'ViewTaskDetailsCtrl'
        });
    }])

    .controller('ViewTaskDetailsCtrl', ["$scope",'apiTasksCalls',"$location","$routeParams",
        function($scope,apiTasksCalls,$location,$routeParams) {
        var onSuccess = function (data){
            console.log(data);
            $scope.taskDetails = data;
        }

        var onError = function (reason){
            $scope.error = reason;
        }

        apiTasksCalls.getTaskDetails($routeParams.taskId).then(onSuccess,onError);

    }]);