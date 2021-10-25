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

        //maybe redirect user to the home page already?

        console.log($scope.user);
        //redirect to respective window!
        console.log("Success register");
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