angular.module('UserListApp')
    .factory('Users', function($http, $q) {

        var data = [];
        var deferred = $q.defer();

        $http.get('http://www.intersoft.ba/testTask/employees/')
            .success(function (response) {
                data = response;
                deferred.resolve(data);
            })
            .error(function () {
                console.log("Nije moguće učitavanje REST servisa");
            });

        return deferred.promise;
    });