'use strict';

angular.module('elen7046ServerAndAdminApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/surveyAdmin', {
        templateUrl: 'app/surveyAdmin/surveyAdmin.html',
        controller: 'SurveyAdminCtrl'
      });
  });
