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

        // Update $scope.localStorageItemCount in order for the badge to update accordingly
        $scope.localStorageItemCount = _getLocalStorageCount();
    
        function _getLocalStorageCount(){
            if (sessionStorage.getItem("completedsurveys")){
                var completedSurveys = JSON.parse(sessionStorage.getItem("completedsurveys"));
                return completedSurveys.length;
            }
            else{
                return 0;
            }
        };
    });