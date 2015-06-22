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
            for (var i = 0; i < $scope.allSurveys.length; i++) {
                for (var j = 0; j < $scope.allSurveys[i].QuestionAnswers.length; j++) {
                    if ($scope.allSurveys[i].QuestionAnswers[j]._id == question._id) {
                        $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.splice(answerOptionIndex, 1);
                        break;
                    }
                }
            }
        };

        $scope.addAnswerOption = function (question) {
            for (var i = 0; i < $scope.allSurveys.length; i++) {
                for (var j = 0; j < $scope.allSurveys[i].QuestionAnswers.length; j++) {
                    if ($scope.allSurveys[i].QuestionAnswers[j]._id == question._id) {
                        var lastIndex = $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.length;
                        $scope.allSurveys[i].QuestionAnswers[j].AnswerOptions.splice(lastIndex, 0, "");
                        break;
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
                if ($scope.allSurveys[i]._id == survey._id) {
                    $scope.allSurveys[i].QuestionAnswers.splice(0, 0, newSurveyQuestion);
                    break;
                }
            }
        };

        $scope.removeQuestion = function (survey, questionIndex) {
            for (var i = 0; i < $scope.allSurveys.length; i++) {
                if ($scope.allSurveys[i]._id == survey._id) {
                    $scope.allSurveys[i].QuestionAnswers.splice(questionIndex, 1);
                    break;
                }
            }
        };

        $scope.addSurvey = function () {
            var newSurvey = new Object();
            newSurvey.QuestionAnswers = [];
            var newSurveyQuestionAnswerObj = new Object();
            newSurveyQuestionAnswerObj.Question = "Set New Question";
            newSurveyQuestionAnswerObj.AnswerType = "Text";
            newSurveyQuestionAnswerObj.AnswerOptions = [];

            newSurvey.QuestionAnswers.push(newSurveyQuestionAnswerObj);
            newSurvey.CreatedDate = Date.UTC();
            newSurvey.CreatedBy = "Admin Guy";
            newSurvey.State = "Active";
            newSurvey.Name = "New Survey";

            $http.post('/api/surveys', newSurvey).success(function () {
                $http.get('/api/surveys').success(function (allSurveys) {
                    $scope.allSurveys = allSurveys;
                    socket.syncUpdates('survey', $scope.allSurveys);
                });
            });
        };

        $scope.removeSurvey = function (survey) {
            $http.delete('/api/surveys/' + survey._id).success(function () {
                $http.get('/api/surveys').success(function (allSurveys) {
                    $scope.allSurveys = allSurveys;
                    socket.syncUpdates('survey', $scope.allSurveys);
                });
            });
        };
    });