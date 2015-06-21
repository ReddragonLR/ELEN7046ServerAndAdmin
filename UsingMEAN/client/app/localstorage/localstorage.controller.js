'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('LocalstorageCtrl', function ($scope, $http) {

        $scope.locallyStoredCompletedSurveys = _getLocallyStoredCompletedSurveyCount();

        function _getLocallyStoredCompletedSurveyCount() {
            if (sessionStorage.getItem("completedsurveys")) {
                var completedSurveys = JSON.parse(sessionStorage.getItem("completedsurveys"));
                return completedSurveys.length;
            } else {
                return 0;
            }
        };

        $scope.submitAllCompletedSurveys = function () {
            if (sessionStorage.getItem("completedsurveys")) {
                console.log('Hit submit all');
                var completedSurveys = JSON.parse(sessionStorage.getItem("completedsurveys"));
                sessionStorage.removeItem("completedsurveys");

                // temp storage for items failed to submit
                var failedCompletedSurveysToUpload = [];

                while (completedSurveys.length > 0) {
                    var completedSurveyData = completedSurveys.pop();
                    $http.post('/api/completedSurveys', {
                        CompletedQuestionAnswers: completedSurveyData,
                        DateCompleted: Date.now(),
                        SurveyTaker: 'Some Random Guy',
                        SurveySupervisor: 'Some Random Supervisor',
                        SurveyName: completedSurveyData.SurveyName
                    }).error(function () {
                        failedCompletedSurveysToUpload.push(completedSurveys[i])
                    });
                };
                if (failedCompletedSurveysToUpload.length > 0) {
                    sessionStorage.setItem("completedsurveys", JSON.stringify(failedCompletedSurveysToUpload));
                    $scope.locallyStoredCompletedSurveys = _getLocallyStoredCompletedSurveyCount();
                }
            }

        };
    });