'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SurveySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Survey', SurveySchema);