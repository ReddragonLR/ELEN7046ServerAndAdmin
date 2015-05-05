'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('CaptureSurveyCtrl', function ($scope, $http, socket) {

        // Use the Survey $resource to fetch all surveys
        $scope.allSurveys = [];
        
        $http.get('/api/surveys').success(function (allSurveys) {
            $scope.allSurveys = allSurveys;
            socket.syncUpdates('survey', $scope.allSurveys);
        });

        $scope.oneAtATime = true;

        // Function to submit the survey
        $scope.submitSurvey = function (survey) {
            console.log(survey);
        }
    });