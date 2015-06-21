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
            if (sessionStorage.getItem("completedsurveys"))
            {
                completedSurveys = JSON.parse(sessionStorage.getItem("completedsurveys"));
                completedSurveys.push(_mapCapturedQuestionAnswers(survey));
                sessionStorage.setItem("completedsurveys", JSON.stringify(completedSurveys));
                window.location = '/captureSurveySuccess'
            }
            else{
                var completedSurveys = [];
                completedSurveys.push(_mapCapturedQuestionAnswers(survey));
                sessionStorage.setItem("completedsurveys", JSON.stringify(completedSurveys));
                window.location = '/captureSurveySuccess'
            }
            /*$http.post('/api/completedSurveys', {
                CompletedQuestionAnswers: _mapCapturedQuestionAnswers(survey),
                DateCompleted: Date.now(),
                SurveyTaker: 'Some Random Guy',
                SurveySupervisor: 'Some Random Supervisor',
                SurveyName: survey.Name
            }).success(function () {
                console.log('SUCCESS');
                window.location = '/captureSurveySuccess'
            });*/
        };

        function _mapCapturedQuestionAnswers(survey) {
            var completedQuestionAnswers = [];
            for (var i = 0; i < survey.QuestionAnswers.length; i++) {
                var completedQuestionAnswerObj = new Object();
                completedQuestionAnswerObj.Question = survey.QuestionAnswers[i].Question;
                completedQuestionAnswerObj.Answer = survey.QuestionAnswers[i].Answer;
                completedQuestionAnswerObj.AnswerType = survey.QuestionAnswers[i].AnswerType;
                completedQuestionAnswers.push(completedQuestionAnswerObj);
            };
            return completedQuestionAnswers;
        };
    });