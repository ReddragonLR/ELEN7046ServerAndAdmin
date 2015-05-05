'use strict';

angular.module('elen7046ServerAndAdminApp')
  .controller('SurveyAdminCtrl', function ($scope, $http, socket) {

  	// Use the Survey $resource to fetch all surveys
  	$scope.allSurveys = [];

  	$http.get('/api/surveys').success(function(allSurveys){
  		$scope.allSurveys = allSurveys;
  		socket.syncUpdates('survey', $scope.allSurveys);
  	});

  	$scope.addSurvey = function(){
  		console.log('Add logic to create new survey here');
  	};
  });
