'use strict';

angular.module('elen7046ServerAndAdminApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/captureSurvey', {
        templateUrl: 'app/captureSurvey/captureSurvey.html',
        controller: 'CaptureSurveyCtrl'
      }).when('/captureSurveySuccess', {
        templateUrl: '/app/captureSurvey/captureSurveySuccess.html',
        controller: 'CaptureSurveyCtrl'
    });
  });
