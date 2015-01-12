angular.module('UserListApp')
    .controller('ListController', function($scope, Users) {

        $scope.users = Users;

        console.log($scope.users);
    });