'use strict';

angular.module('elen7046ServerAndAdminApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/reports', {
        templateUrl: 'app/reports/reports.html',
        controller: 'ReportsCtrl'
      });
  });
