'use strict';

var _ = require('lodash');
var Survey = require('./survey.model');

// Get list of surveys
exports.index = function (req, res) {
    if (req.query.option == 'getsurveyids') {
        return getSurveyIds(req, res);
    } else {
        Survey.find(function (err, surveys) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, surveys);
        });
    }

};

// Get a single survey
exports.show = function (req, res) {
    Survey.findById(req.params.id, function (err, survey) {
        if (err) {
            return handleError(res, err);
        }
        if (!survey) {
            return res.send(404);
        }
        return res.json(survey);
    });
};

// Creates a new survey in the DB.
exports.create = function (req, res) {
    Survey.create(req.body, function (err, survey) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, survey);
    });
};

// Updates an existing survey in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Survey.findById(req.params.id, function (err, survey) {
        if (err) {
            return handleError(res, err);
        }
        if (!survey) {
            return res.send(404);
        }
        var updated = _.merge(survey, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, survey);
        });
    });
};

// Deletes a survey from the DB.
exports.destroy = function (req, res) {
    Survey.findById(req.params.id, function (err, survey) {
        if (err) {
            return handleError(res, err);
        }
        if (!survey) {
            return res.send(404);
        }
        survey.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

// Gets survey IDs only
function getSurveyIds(req, res) {
    Survey.find(function (err, surveys) {
        if (err) {
            return handleError(res, err);
        }
        var surveyIds = [];
        for (var i = 0; i < surveys.length; i++) {
            var surveyDataSubset = new Object();
            surveyDataSubset._id = surveys[i]._id;
            surveyDataSubset.Name = surveys[i].Name;
            surveyIds.push(surveyDataSubset);
        }
        return res.json(surveyIds);
    });
}

function handleError(res, err) {
    return res.send(500, err);
}