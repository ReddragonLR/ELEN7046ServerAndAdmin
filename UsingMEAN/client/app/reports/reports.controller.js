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

                var groupedYesNoData = [];
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
                        questionObject.Answers = [];
                        var answerObject = new Object();
                        answerObject.Answer = dataPoint.Answer;
                        answerObject.Count = 1;
                        questionObject.Answers.push(answerObject);
                        groupedYesNoData.push(questionObject);
                    }

                };
                return groupedYesNoData;
            };

            // Fetch all YesNo type completed survey questions


            // Now I have a list of all YesNo questions from all completed surveys
            // Now to group them by question

            $scope.pieCharts = _getPieChartData();

            function _getPieChartData() {
                var pieChartConfigAndData = [];
                for (var i = 0; i < $scope.yesnoData.length; i++) {
                    var pieChartConfigAndDataObj = new Object();
                    pieChartConfigAndDataObj.pieChartSeries = [{
                        type: "pie",
                        "name": $scope.yesnoData[i].Question,
                        "data": getPieChartData()
                    }];

                    function getPieChartData() {
                        var pieData = [];
                        for (var j = 0; j < $scope.yesnoData[i].Answers.length; j++) {
                            pieData.push([$scope.yesnoData[i].Answers[j].Answer, $scope.yesnoData[i].Answers[j].Count]);
                        }
                        return pieData;
                    };

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
                            text: $scope.yesnoData[i].Question
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

            $scope.dropDownData = _mapDropDownData();

            function _mapDropDownData() {
                var dropDownDataTemp = [];

                for (var i = 0; i < $scope.allCurrentYearSurveyData.length; i++) {
                    for (var j = 0; j < $scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers.length; j++) {
                        if ($scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers[j].AnswerType == 'Dropdown') {
                            dropDownDataTemp.push($scope.allCurrentYearSurveyData[i].CompletedQuestionAnswers[j]);
                        }
                    };
                };

                var groupedDropDownData = [];
                for (var i = 0; i < dropDownDataTemp.length; i++) {
                    if (i == 0) {
                        var startingDataPoint = new Object();
                        startingDataPoint.Question = dropDownDataTemp[i].Question;
                        startingDataPoint.Answers = [];
                        var answerObject = new Object();
                        answerObject.Answer = dropDownDataTemp[i].Answer;
                        answerObject.Count = 1;
                        startingDataPoint.Answers.push(answerObject);
                        groupedDropDownData.push(startingDataPoint);
                        continue;
                    }
                    var dataPoint = new Object();
                    dataPoint.Question = dropDownDataTemp[i].Question;
                    dataPoint.Answer = dropDownDataTemp[i].Answer;

                    var questionFound = false;
                    for (var j = 0; j < groupedDropDownData.length; j++) {
                        if (groupedDropDownData[j].Question == dataPoint.Question) {
                            questionFound = true;

                            var answerFound = false;
                            for (var k = 0; k < groupedDropDownData[j].Answers.length; k++) {
                                if (groupedDropDownData[j].Answers[k].Answer == dataPoint.Answer) {
                                    answerFound = true;
                                    groupedDropDownData[j].Answers[k].Count += 1;
                                }
                            }

                            if (answerFound == false) {
                                var answerObject = new Object();
                                answerObject.Answer = dataPoint.Answer;
                                answerObject.Count = 1;
                                groupedDropDownData[j].Answers.push(answerObject);
                            }
                        };
                    };

                    if (questionFound == false) {
                        var questionObject = new Object();
                        questionObject.Question = dataPoint.Question;
                        questionObject.Answers = [];
                        var answerObject = new Object();
                        answerObject.Answer = dataPoint.Answer;
                        answerObject.Count = 1;
                        questionObject.Answers.push(answerObject);
                        groupedDropDownData.push(questionObject);
                    }

                };
                return groupedDropDownData;
            };

            $scope.dropDownBarChartSummary = {
                title: {
                    text: 'Stacked column chart'
                },
                xAxis: {
                    categories: _getUniqueAnswerOptions()
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    }
                },
                options: {
                    chart: {
                        type: 'column'
                    },
                    legend: {
                        align: 'right',
                        x: -70,
                        verticalAlign: 'top',
                        y: 20,
                        floating: true,
                        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                        borderColor: '#CCC',
                        borderWidth: 1,
                        shadow: false
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                this.series.name + ': ' + this.y + '<br/>' +
                                'Total: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        column: {
                            stacking: 'normal',
                            dataLabels: {
                                enabled: true,
                                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                                style: {
                                    textShadow: '0 0 3px black, 0 0 3px black'
                                }
                            }
                        }
                    }
                },
                series: _getDropDownSummarySeries()
            };

            function _getDropDownUniqueQuestions() {
                var questions = [];
                for (var i = 0; i < $scope.dropDownData.length; i++) {
                    questions.push($scope.dropDownData[i].Question);
                }
                return questions;
            };
            
            function _getUniqueAnswerOptions(){
                // get all answerOptions
                var allAnswerOptions = [];
                for (var i = 0; i < $scope.dropDownData.length; i++) {
                    for (var j = 0; j < $scope.dropDownData[i].Answers.length; j++) {
                        allAnswerOptions.push($scope.dropDownData[i].Answers[j].Answer);
                    }
                }

                var uniqueAnswerOptions = [];

                for (var i = 0; i < allAnswerOptions.length; i++) {
                    if (i == 0) {
                        uniqueAnswerOptions.push(allAnswerOptions[i]);
                    } else {
                        var uniqueAnswerOptionFound = false;
                        for (var j = 0; j < uniqueAnswerOptions.length; j++) {
                            if (uniqueAnswerOptions[j] == allAnswerOptions[i]) {
                                uniqueAnswerOptionFound = true;
                                break;
                            }
                        }
                        if (uniqueAnswerOptionFound == false) {
                            uniqueAnswerOptions.push(allAnswerOptions[i]);
                        }
                    }
                }
                return uniqueAnswerOptions;
            };

            function _getDropDownSummarySeries() {
                
                var uniqueAnswerOptionQuestions = _getDropDownUniqueQuestions();
                console.log(uniqueAnswerOptionQuestions);
                
                // get all answerOptions
                var allAnswerOptions = [];
                for (var i = 0; i < $scope.dropDownData.length; i++) {
                    for (var j = 0; j < $scope.dropDownData[i].Answers.length; j++) {
                        allAnswerOptions.push($scope.dropDownData[i].Answers[j].Answer);
                    }
                }

                var uniqueAnswerOptions = [];

                for (var i = 0; i < allAnswerOptions.length; i++) {
                    if (i == 0) {
                        uniqueAnswerOptions.push(allAnswerOptions[i]);
                    } else {
                        var uniqueAnswerOptionFound = false;
                        for (var j = 0; j < uniqueAnswerOptions.length; j++) {
                            if (uniqueAnswerOptions[j] == allAnswerOptions[i]) {
                                uniqueAnswerOptionFound = true;
                                break;
                            }
                        }
                        if (uniqueAnswerOptionFound == false) {
                            uniqueAnswerOptions.push(allAnswerOptions[i]);
                        }
                    }
                }

                var dropDownSeries = [];

                for (var i = 0; i < uniqueAnswerOptions.length; i++) {
                    var dropDownSeriesObj = new Object();
                    dropDownSeriesObj.name = uniqueAnswerOptions[i];

                    dropDownSeriesObj.data = [];
                    for (var j = 0; j < $scope.dropDownData.length; j++) {
                        for (var k = 0; k < $scope.dropDownData[j].Answers.length; k++) {
                            if (uniqueAnswerOptions[i] == $scope.dropDownData[j].Answers[k].Answer) {
                                dropDownSeriesObj.data.push($scope.dropDownData[j].Answers[k].Count);
                            } else {
                                dropDownSeriesObj.data.push(0);
                            }
                        }
                    }

                    dropDownSeries.push(dropDownSeriesObj);
                }
                var stuff = [{
                    name: 'John',
                    data: [5, 3, 0, 7, 2]
                    }, {
                    name: 'Jane',
                    data: [2, 2, 3, 0, 1]
                    }, {
                    name: 'Joe',
                    data: [3, 4, 0, 2, 5]
                    }];
                return stuff;
            };

            $scope.reflow = function () {
                $scope.$broadcast('highchartsng.reflow');
            };
        });
    });