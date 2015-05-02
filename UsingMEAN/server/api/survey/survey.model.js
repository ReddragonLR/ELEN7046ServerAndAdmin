'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurveySchema = new Schema({
  QuestionAnswers: [{
  						Question: String,
  						AnswerType: {type: Array, "default": ["Radio", "Multi", "Text"]},
  						AnswerOptions: {type: Array, "default": []}
  					}],
  State: {type: Array, "default": ["Draft", "Active", "Inactive"]},
  CreatedDate: Date,
  CreatedBy: String
});

module.exports = mongoose.model('Survey', SurveySchema);