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
            $http.put('/api/surveys/' + survey._id, {
                Question: 'This is an updated question',
                AnswerType: ['Radio'],
                AnswerOptions: ['Yes', 'No', 'Not Sure']
            });
            console.log('Survey questions updated');
        }
    });