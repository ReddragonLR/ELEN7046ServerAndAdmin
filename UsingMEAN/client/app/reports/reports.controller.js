'use strict';

angular.module('elen7046ServerAndAdminApp')
    .controller('ReportsCtrl', function ($scope, $http, socket) {

        // Variable to hold all current year survey data
        $scope.allCurrentYearSurveyData = [];

        // Populate surveys into list so that we can select the one we wish to report on
        // for the current year
        $http.get('/api/completedSurveys/?option=currentYearReport').success(function (allSurveyData) {
            $scope.allCurrentYearSurveyData = allSurveyData;
            // Get data and plot on graph
            $scope.overallSummarySeries = [
                {
                    "name": "Surveys Captured Per Month",
                    "data": _mapCompletedSurveyData(),
                    type: "column"
            }];

            // Populate data into respective variables based on the answer type
            function _mapCompletedSurveyData() {
                var dataPoints = [];
                // Variable to hold the overall summary report data
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
                console.log($scope.allCurrentYearSurveyData.length);
                for (var i = 0; i < $scope.allCurrentYearSurveyData.length; i++) {
                    var surveyDate = new Date($scope.allCurrentYearSurveyData[i].DateCompleted)
                    if (surveyDate.getMonth() == '0') {
                        JanuaryCount += 1;
                    }
                    if (surveyDate.getMonth() == '1') {
                        FebruaryCount += 1;
                    }
                    if (surveyDate.getMonth() == '2') {
                        MarchCount += 1;
                    }
                    if (surveyDate.getMonth() == '3') {
                        AprilCount += 1;
                    }
                    if (surveyDate.getMonth() == '4') {
                        MayCount += 1;
                    }
                    if (surveyDate.getMonth() == '5') {
                        JuneCount += 1;
                    }
                    if (surveyDate.getMonth() == '6') {
                        JulyCount += 1;
                    }
                    if (surveyDate.getMonth() == '7') {
                        AugustCount += 1;
                    }
                    if (surveyDate.getMonth() == '8') {
                        SeptemberCount += 1;
                    }
                    if (surveyDate.getMonth() == '9') {
                        OctoberCount += 1;
                    }
                    if (surveyDate.getMonth() == '10') {
                        NovemberCount += 1;
                    }
                    if (surveyDate.getMonth() == '11') {
                        DecemberCount += 1;
                    }
                };

                dataPoints.push(JanuaryCount);
                dataPoints.push(FebruaryCount);
                dataPoints.push(MarchCount);
                dataPoints.push(AprilCount);
                dataPoints.push(MayCount);
                dataPoints.push(JuneCount);
                dataPoints.push(JulyCount);
                dataPoints.push(AugustCount);
                dataPoints.push(SeptemberCount);
                dataPoints.push(OctoberCount);
                dataPoints.push(NovemberCount);
                dataPoints.push(DecemberCount);

                return dataPoints;
            };

            $scope.overallSummaryConfig = {
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
                series: $scope.overallSummarySeries,
                title: {
                    text: 'Overall Survey Sumary For ' + new Date().getFullYear().toString()
                },
                credits: {
                    enabled: true
                },
                loading: false,
                size: {}
            }

            $scope.reflow = function () {
                $scope.$broadcast('highchartsng.reflow');
            };
        });


        // Variable to hold the data for the YESNO report
        //$scope.dichotomousQuestionData = [];

        // Variable to store data for the range based questions
        //$scope.rangeBasedQuestionData = [];


        /*if ($scope.allCurrentYearSurveyData[i].AnswerType == 'YesNo') {
                            $scope.dichotomousQuestionData.push($scope.allCurrentYearSurveyData[i]);
                        }
                        if ($scope.allCurrentYearSurveyData[i].AnswerType == 'DropDown') {
                            $scope.rangeBasedQuestionData.push($scope.allCurrentYearSurveyData[i]);
                        }*/





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