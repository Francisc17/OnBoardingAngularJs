'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'apiUserCalls',
  'apiProjectsCalls',
  'apiTasksCalls',
  'myApp.Login',
  'myApp.Register',
  'myApp.Projects',
  'myApp.ProjectDetails',
  'myApp.AddProject',
  'myApp.AddTask',
  'myApp.Tasks',
  'myApp.TaskDetails',
  'myApp.version',
  'angular-jwt',
  'swxLocalStorage'
])
    .factory('httpResponseInterceptor', ['$q', '$rootScope', '$location', function($q, $rootScope, $location) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            // Something like below:
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    }])

    .config(['$locationProvider', '$routeProvider','jwtOptionsProvider','$httpProvider',
      function($locationProvider, $routeProvider, jwtOptionsProvider, $httpProvider) {

      //send authentication token in every request
        jwtOptionsProvider.config({
          whiteListedDomains: ['localhost'],

          tokenGetter: ['$localStorage', function($localStorage) {
            return $localStorage.get('token');
          }]
        });

        $httpProvider.interceptors.push('jwtInterceptor');
        $httpProvider.interceptors.push('httpResponseInterceptor');

        //TODO: why we need this here?
  $locationProvider.hashPrefix('!');

  //default route!
  $routeProvider.otherwise({redirectTo: '/login'});
}]);