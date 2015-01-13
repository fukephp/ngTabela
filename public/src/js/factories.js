angular.module('UserListApp')
    .factory('UsersFactory', function($http) {
        return {
            getUsers : function() {
                return $http({
                url : 'http://www.intersoft.ba/testTask/employees/',
                method : 'GET'
                })
            }
        }
    });