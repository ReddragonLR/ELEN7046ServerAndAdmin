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
                    "name": "Surveys Captured",
                    "data": _mapSummaryGraphData(),
                    type: "column"
            }];

            // Populate data into respective variables based on the answer type
            function _mapSummaryGraphData() {
                var dataPoints = [];
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

                },
                chart: {
                    type: 'column'
                },
                plotOptions: {
                    series: {
                        stacking: ''
                    }
                },
                title: {
                    text: 'Overall Survey Sumary For ' + new Date().getFullYear().toString()
                },
                credits: {
                    enabled: true
                },
                loading: false,
                size: {
                    height: 600,
                    width: 1150
                },
                series: $scope.overallSummarySeries,
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Number of Completed Surveys'
                    }
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            };

            $scope.yesnoData = _mapYesNoData();

            function _mapYesNoData() {
                var yesNoDataTemp = [];
                for (var i = 0; i < $scope.allCurrentYearSurveyData.length; i++) {
                    for (var j = 0; j < $scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers.length; j++) {
                        if ($scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers[j].AnswerType == 'YesNo') {
                            yesNoDataTemp.push($scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers[j]);
                        }
                    };
                };

                /*var groupedYesNoData = [];
                for (var i = 0; i < yesNoDataTemp.length; i++) {
                    if (i == 0) {
                        var startingDataPoint = new Object();
                        startingDataPoint.Question = yesNoDataTemp[i].Question;
                        startingDataPoint.Answers = [];
                        var answerObject = new Object();
                        answerObject.Answer = yesNoDataTemp[i].Answer;
                        answerObject.Count = 1;
                        startingDataPoint.Answers.push(answerObject);
                        groupedYesNoData.push(startingDataPoint);
                        continue;
                    }
                    var dataPoint = new Object();
                    dataPoint.Question = yesNoDataTemp[i].Question;
                    dataPoint.Answer = yesNoDataTemp[i].Answer;

                    var questionFound = false;
                    for (var j = 0; j < groupedYesNoData.length; j++) {
                        if (groupedYesNoData[j].Question == dataPoint.Question) {
                            questionFound = true;

                            var answerFound = false;
                            for (var k = 0; k < groupedYesNoData[j].Answers.length; k++) {
                                if (groupedYesNoData[j].Answers[k].Answer == dataPoint.Answer) {
                                    answerFound = true;
                                    groupedYesNoData[j].Answers[k].Count += 1;
                                }
                            }

                            if (answerFound == false) {
                                var answerObject = new Object();
                                answerObject.Answer = dataPoint.Answer;
                                answerObject.Count = 1;
                                groupedYesNoData[j].Answers.push(answerObject);
                            }
                        };
                    };

                    if (questionFound == false) {
                        var questionObject = new Object();
                        questionObject.Question = dataPoint.Question;
                        var answerObject = new Object();
                        answerObject.Answer = dataPoint.Answer;
                        answerObject.Count = 1;
                        questionObject.Answers.push(answerObject);
                        groupedYesNoData.push(questionObject);
                    }

                };*/
                return yesNoDataTemp;
            };

            // Fetch all YesNo type completed survey questions


            // Now I have a list of all YesNo questions from all completed surveys
            // Now to group them by question

            // Test case for multiple pie charts
            $scope.pieCharts = _getPieChartData();

            function _getPieChartData() {
                var pieChartConfigAndData = [];
                for (var i = 0; i < $scope.yesnoData.length; i++) {
                    var pieChartConfigAndDataObj = new Object();
                    pieChartConfigAndDataObj.pieChartSeries = [{
                        type: "pie",
                        "name": 'Pie Chart: ' + i,
                        "data": [
                            ['Firefox', 25.0],
                            ['IE', 25.0],
                            ['Chrome', 25.0],
                            ['Safari', 25.0]
                        ]
                    }];

                    pieChartConfigAndDataObj.pieChartConfig = {
                        options: {

                        },
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                }
                            }
                        },
                        title: {
                            text: 'My Big Pie Chart: ' + i
                        },
                        loading: false,
                        size: {
                            height: 500,
                            width: 500
                        },
                        series: pieChartConfigAndDataObj.pieChartSeries
                    };

                    pieChartConfigAndData.push(pieChartConfigAndDataObj)
                };
                return pieChartConfigAndData;
            };


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