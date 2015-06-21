'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
    }];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };

        $scope.localStorageSupported = _checkIfLocalStorageSupported();

        function _checkIfLocalStorageSupported() {
            if (typeof (Storage) !== "undefined") {
                return true;
            } else {
                return false;
            }
        };

        // Update $scope.localStorageItemCount in order for the badge to update accordingly
    });