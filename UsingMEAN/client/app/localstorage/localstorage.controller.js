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
                var completedSurveys = JSON.parse(sessionStorage.getItem("completedsurveys"));
                sessionStorage.removeItem("completedsurveys");
                // temp storage for items failed to submit
                var failedCompletedSurveysToUpload = [];

                while (completedSurveys.length > 0) {
                    var completedSurveyData = completedSurveys.pop();
                    console.log(completedSurveyData);
                    $http.post('/api/completedSurveys', {
                        CompletedQuestionAnswers: completedSurveyData.completedQuestionAnswers,
                        DateCompleted: completedSurveyData.DateCompleted,
                        SurveyTaker: completedSurveyData.SurveyTaker,
                        SurveySupervisor: completedSurveyData.SurveySupervisor,
                        SurveyName: completedSurveyData.SurveyName
                    }).error(function () {
                        failedCompletedSurveysToUpload.push(completedSurveys[i])
                    });
                };
                if (failedCompletedSurveysToUpload.length > 0) {
                    sessionStorage.setItem("completedsurveys", JSON.stringify(failedCompletedSurveysToUpload));
                    $scope.locallyStoredCompletedSurveys = _getLocallyStoredCompletedSurveyCount();
                }
                window.location.reload();
            }

        };
    });