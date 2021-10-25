angular.module("apiTasksCalls",['ngRoute'])
.factory("apiTasksCalls",function ($http){

    var getProgrammerTasks = function (){
        return $http({
            url: baseURL + "/api/user/tasks",
            method: 'GET',
        }).then(function (response){
            return response.data;
        })
    };

    var changeTaskState = function (taskId,task){
        return $http({
            url: baseURL + "/api/user/tasks/" + taskId,
            method: 'PUT',
            data: JSON.stringify(task)
        }).then(function (response){
            return response.data
        })
    }

    var getTaskDetails = function (taskId){
        return $http({
            url: baseURL + "/api/user/tasks/" + taskId,
            method: 'GET',
            params: {
                includeRespInfo: true,
                includeProjInfo: true
            }
        }).then(function (response){
            return response.data;
        })
    };

    var createTask = function (task,projId){
        return $http({
            url: baseURL + "/api/project/"+ projId +"/tasks",
            method: 'POST',
            data: JSON.stringify(task)
        }).then(function (response){
            return response.data
        })
    }

    return {
        getProgrammerTasks: getProgrammerTasks,
        changeTaskState: changeTaskState,
        getTaskDetails: getTaskDetails,
        createTask: createTask
    };
});