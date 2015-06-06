'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('ReportsCtrl', function ($scope, $http, socket) {

        // Variable to hold all current year survey data
        $scope.allCurrentYearSurveyData = [];
    
        // Populate surveys into list so that we can select the one we wish to report on
        // for the current year
        $http.get('/api/completedSurveys/?option=currentYearReport').success(function (allSurveyData) {
            $scope.allCurrentYearSurveyData = allSurveyData;
        });

        // Variable to hold the overall summary report data
        $scope.overallSummaryReportData = [];
        var JanuaryCount = 0;
        var FebruaryCount = 0;
        var MarchCount = 0;
        var AprilCount = 0;
        var MayCount = 0;
        var JuneCount = 0;
        var JulyCount = 0;
        var AugustCount = 0;
        var SeptemberCount = 0;
        var OctoberCount = 0;
        var NovemberCount = 0;
        var DecemberCount = 0;

        // Variable to hold the data for the YESNO report
        $scope.dichotomousQuestionData = [];

        // Variable to store data for the range based questions
        $scope.rangeBasedQuestionData = [];



        // Populate data into respective variables based on the answer type
        for (var i = 0; i < $scope.allCurrentYearSurveyData.length; i++) {
            if ($scope.allCurrentYearSurveyData[i].AnswerType == 'YesNo') {
                $scope.dichotomousQuestionData.push($scope.allCurrentYearSurveyData[i]);
            }
            if ($scope.allCurrentYearSurveyData[i].AnswerType == 'DropDown') {
                $scope.rangeBasedQuestionData.push($scope.allCurrentYearSurveyData[i]);
            }


        };

        // Get data and plot on graph
        /*$scope.chartSeries = [
            {
                "name": "Some data",
                "data": [1, 2, 4, 7, 3]
            },
            {
                "name": "Some data 3",
                "data": [3, 1, null, 5, 2],
                connectNulls: true
            },
            {
                "name": "Some data 2",
                "data": [5, 2, 2, 3, 5],
                type: "column"
            },
            {
                "name": "My Super Column",
                "data": [1, 1, 2, 3, 2],
                type: "column"
            }
  ];

        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'areaspline'
                },
                plotOptions: {
                    series: {
                        stacking: ''
                    }
                }
            },
            series: $scope.chartSeries,
            title: {
                text: 'Hello'
            },
            credits: {
                enabled: true
            },
            loading: false,
            size: {}
        }*/

        $scope.reflow = function () {
            $scope.$broadcast('highchartsng.reflow');
        };

        /*$scope.chartTypes = [
    {"id": "line", "title": "Line"},
    {"id": "spline", "title": "Smooth line"},
    {"id": "area", "title": "Area"},
    {"id": "areaspline", "title": "Smooth area"},
    {"id": "column", "title": "Column"},
    {"id": "bar", "title": "Bar"},
    {"id": "pie", "title": "Pie"},
    {"id": "scatter", "title": "Scatter"}
  ];

  $scope.dashStyles = [
    {"id": "Solid", "title": "Solid"},
    {"id": "ShortDash", "title": "ShortDash"},
    {"id": "ShortDot", "title": "ShortDot"},
    {"id": "ShortDashDot", "title": "ShortDashDot"},
    {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
    {"id": "Dot", "title": "Dot"},
    {"id": "Dash", "title": "Dash"},
    {"id": "LongDash", "title": "LongDash"},
    {"id": "DashDot", "title": "DashDot"},
    {"id": "LongDashDot", "title": "LongDashDot"},
    {"id": "LongDashDotDot", "title": "LongDashDotDot"}
  ];*/



        /*$scope.chartStack = [
          {"id": '', "title": "No"},
          {"id": "normal", "title": "Normal"},
          {"id": "percent", "title": "Percent"}
        ];

        $scope.addPoints = function () {
          var seriesArray = $scope.chartConfig.series;
          var rndIdx = Math.floor(Math.random() * seriesArray.length);
          seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
        };

        $scope.addSeries = function () {
          var rnd = []
          for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
          }
          $scope.chartConfig.series.push({
            data: rnd
          })
        }

        $scope.removeRandomSeries = function () {
          var seriesArray = $scope.chartConfig.series;
          var rndIdx = Math.floor(Math.random() * seriesArray.length);
          seriesArray.splice(rndIdx, 1)
        }

        $scope.removeSeries = function (id) {
          var seriesArray = $scope.chartConfig.series;
          seriesArray.splice(id, 1)
        }

        $scope.toggleHighCharts = function () {
          this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks
        }

        $scope.replaceAllSeries = function () {
          var data = [
            { name: "first", data: [10] },
            { name: "second", data: [3] },
            { name: "third", data: [13] }
          ];
          $scope.chartConfig.series = data;
        };*/



    });