'use strict';

angular.module('elen7046ServerAndAdminApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/localstorage', {
        templateUrl: 'app/localstorage/localstorage.html',
        controller: 'LocalstorageCtrl'
      });
  });
