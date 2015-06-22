'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('SurveyAdminCtrl', function ($scope, $http, socket) {


        /*$scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
          $scope.awesomeThings = awesomeThings;
          socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $scope.addThing = function() {
          if($scope.newThing === '') {
            return;
          }
          $http.post('/api/things', { name: $scope.newThing });
          $scope.newThing = '';
        };

        $scope.deleteThing = function(thing) {
          $http.delete('/api/things/' + thing._id);
        };

        $scope.$on('$destroy', function () {
          socket.unsyncUpdates('thing');
        });*/

        // Use the Survey $resource to fetch all surveys
        $scope.allSurveys = [];

        $http.get('/api/surveys').success(function (allSurveys) {
            $scope.allSurveys = allSurveys;
            socket.syncUpdates('survey', $scope.allSurveys);
        });

        // Update the questions in the survey
        $scope.updateSurveyQuestions = function (survey) {
            $http.delete('/api/surveys/' + survey._id).success(function () {
                $http.post('/api/surveys/', survey).error(function (err) {
                    console.log(err);
                });
            });
        }

        $scope.deleteAnswerOption = function (answerOptionIndex, question) {
            var updatedAllSurveys = $scope.allSurveys;
            for (var i = 0; i < updatedAllSurveys.length; i++) {
                for (var j = 0; j < updatedAllSurveys[i].QuestionAnswers.length; j++) {
                    if (updatedAllSurveys[i].QuestionAnswers[j].Question == question.Question) {
                        $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.splice(answerOptionIndex, 1);
                    }
                }
            }
        };

        $scope.addAnswerOption = function (question) {
            for (var i = 0; i < $scope.allSurveys.length; i++) {
                for (var j = 0; j < $scope.allSurveys[i].QuestionAnswers.length; j++) {
                    if ($scope.allSurveys[i].QuestionAnswers[j].Question == question.Question) {
                        var lastIndex = $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.length - 1;
                        $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.splice(lastIndex, 0, "");
                    }
                }
            }
        }

        $scope.addQuestion = function (survey) {
            var newSurveyQuestion = new Object();
            newSurveyQuestion.Question = "Set New Question";
            newSurveyQuestion.AnswerType = "Text";
            newSurveyQuestion.AnswerOptions = [];

            for (var i = 0; i < $scope.allSurveys.length; i++) {
                if ($scope.allSurveys[i].Name == survey.Name) {
                    $scope.allSurveys[i].QuestionAnswers.splice(0, 0, newSurveyQuestion);
                }
            }
        };

        $scope.removeQuestion = function (survey, questionIndex) {
            alert("asdasd");
        };
    });