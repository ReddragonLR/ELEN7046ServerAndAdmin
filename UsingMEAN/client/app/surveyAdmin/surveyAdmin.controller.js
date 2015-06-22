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
            console.log(survey);
            $http.delete('/api/surveys/' + survey._id).success(function () {
                $http.post('/api/surveys/', survey).error(function (err) {
                    console.log(err);
                });
            });
            console.log('Survey questions updated');
        }
    });