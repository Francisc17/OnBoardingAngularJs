angular.module("apiProjectsCalls",['ngRoute'])
    .factory("apiProjectsCalls",function ($http) {

        var getUserProjects = function () {
            return $http({
                url: baseURL + "/api/projects",
                method: 'GET',
            }).then(function (response) {
                return response.data;
            })
        };

        var getProjectDetails = function (projectId) {
            return $http({
                url: baseURL + "/api/projects/" + String(projectId),
                method: 'GET',
                params: {
                    includeTasks: true,
                    includePMInfo: true
                }
            }).then(function (response){
                return response.data;
            })
        };

        var createProject = function (project){
            return $http({
                url: baseURL + "/api/projects/",
                method: 'POST',
                data: JSON.stringify(project)
            }).then(function (response){
                return response.data;
            })
        }

        return {
            getUserProjects: getUserProjects,
            getProjectDetails: getProjectDetails,
            createProject: createProject
        };
    });