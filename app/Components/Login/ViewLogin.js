'use strict';

angular.module("myApp.Login", [
    'ngRoute',
    //Library used to work with JWT Tokens
    //https://github.com/auth0/angular-jwt
    'angular-jwt',

    //LocalStorage Library:
    //https://github.com/grevory/angular-local-storage
    //tutorial followed:
    //https://scriptwerx.dev/angularjs-localstorage/
    'swxLocalStorage'
])

.config(
    function($routeProvider,$httpProvider, jwtOptionsProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'Components/Login/ViewLogin.html',
        controller: 'ViewLoginCtrl'
    });
})

.controller('ViewLoginCtrl', ["$scope",'apiUserCalls','jwtHelper','$localStorage', "$location",
    function($scope,apiUserCalls,jwtHelper,$localStorage,$location) {

    $scope.loggedIn = false;

    var onLoginComplete = function (data){
        //Put token in the localStorage.
        var expToken = data['access_token'];
        $localStorage.put('token',expToken,jwtHelper.getTokenExpirationDate(expToken));

        var tokenPayload = jwtHelper.decodeToken(expToken);

        console.log("login success");
        $scope.loggedIn = true;

        if (tokenPayload['role'] === "Gestor Projeto"){
            $location.path('/projects');
        }
        if (tokenPayload['role'] === "Programador"){
            $location.path('/tasks');
        }
    };

    var onError = function (reason){
        $scope.error = "Username or Password incorrect!";
    };

    $scope.submit = function (username, password){
        apiUserCalls.getUserToken(username, password)
            .then(onLoginComplete,onError);
    }
}]);