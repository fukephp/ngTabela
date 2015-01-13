angular.module('UserListApp')
    .controller('ListController', function($scope, $http, UsersFactory) {
        $scope.users = [];

        //
        UsersFactory.getUsers().success(function(data){
            $scope.users = data;
        });

        // Sortiranje korisnika po imenu, prezimenu itd.
        $scope.sort = {
            active: '',
            descending: undefined
        };
        $scope.changeSorting = function(column) {
            var sort = $scope.sort;

            if(sort.active == column) {
                sort.descending = !sort.descending;
            } else {
                sort.active = column;
                sort.descending = false;
            }
        };

        // Prikazi ikonu za sortiranje
        $scope.showIcon = function(column) {
            var sort = $scope.sort;

            if(sort.active == column) {
                return sort.descending
                    ? 'arrow_up'
                    : 'arrow_down';
            }

            return 'arrow_up';
        };

        // Provedeno vrijeme u firmi

        // Danasnji datum
        var currentTime = new Date();
        // Godina (primjer: 1990)
        $scope.year = currentTime.getFullYear();

        $scope.employedIn = function(column) {
            var currentYear = $scope.year;
            total = currentYear - column;
            console.log(column);
            if(total == 1 || total == 2 || total == 3 || total == 4) {
                return total + " godine";
            } else {
                return total + " godina";
            }
        }
    });