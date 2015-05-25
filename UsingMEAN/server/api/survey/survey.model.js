'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurveySchema = new Schema({
    QuestionAnswers: [{
        Question: String,
        AnswerType: String,
        AnswerOptions: {
            type: Array,
            "default": []
        },
        Answer: {
            type: String,
            "default": ""
        }
       }],
    State: String,
    CreatedDate: Date,
    CreatedBy: String,
    Name: String
});

module.exports = mongoose.model('Survey', SurveySchema);