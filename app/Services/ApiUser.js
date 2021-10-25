let baseURL = "https://localhost:44311";

angular.module("apiUserCalls", ['ngRoute'])
    .factory("apiUserCalls", function ($http){

        var getUserToken = function (aUsername,aPassword){
            return $http({
                url: baseURL + "/oauth/token",
                method: 'POST',
                data:
                    "username=" + aUsername + "&password=" +
                        aPassword + "&grant_type=password"
                ,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                skipAuthorization: true
            }).then(function (response){
                return response.data;
            })
        };

        var registerUser = function (user){
            return $http({
                url: baseURL + "/api/users/create",
                method: 'POST',
                data: JSON.stringify(user),
                skipAuthorization: true
            }).then(function (response){
                return response.data
            })
        };

        var getUsersByRole = function (role){
            return $http({
                url: baseURL + "/api/users/role/"+role,
                method: 'GET'
            }).then(function (response){
                return response.data
            })
        };

        return {
            getUserToken: getUserToken,
            registerUser: registerUser,
            getUserByRole: getUsersByRole
        };
    });