'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CompletedSurveySchema = new Schema({
  CompletedQuestionAnswers: [{
  								Question: String,
  								Answer: String,
  								AnswerType: String
  							}],
  DateCompleted: Date,
  SurveyTaker: String,
  SurveySupervisor: String,
  SurveyName: String
});

module.exports = mongoose.model('CompletedSurvey', CompletedSurveySchema);