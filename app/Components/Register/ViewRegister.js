'use strict';

angular.module("myApp.Register", ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'Components/Register/ViewRegister.html',
        controller: 'ViewRegisterCtrl'
    });
}])

.controller('ViewRegisterCtrl', ["$scope",'apiUserCalls',"$location",function($scope,apiUserCalls,$location) {

    var onRegisterComplete = function (data){
        $location.path('/login');
    };

    var onError = function (reason){
        $scope.error = "Something wrong!";
    };

    $scope.registerSubmit = function (user){
        console.log(user);
        apiUserCalls.registerUser(user)
            .then(onRegisterComplete,onError)
    };
}]);