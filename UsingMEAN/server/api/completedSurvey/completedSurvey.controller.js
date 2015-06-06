'use strict';

var _ = require('lodash');
var CompletedSurvey = require('./completedSurvey.model');

// Get list of completedSurveys
// If a URL parameter exists where the option is to pull the current year report then the only current year
// completed surveys are returned
exports.index = function (req, res) {
    if (req.query.option == 'currentYearReport') {
        CompletedSurvey.find(function (err, completedSurveys) {
            if (err) {
                return handleError(res, err);
            }
            var completedSurveysByCurrentYear = [];
            var currentYear = new Date().getFullYear();
            for (var i = 0; i < completedSurveys.length; i++) {
                if (completedSurveys[i].DateCompleted.getFullYear() == currentYear) {
                    completedSurveysByCurrentYear.push(completedSurveys[i]);
                }
            };
            return res.json(200, completedSurveysByCurrentYear);
        });
    } else {
        CompletedSurvey.find(function (err, completedSurveys) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, completedSurveys);
        });
    }
};

// Get a single completedSurvey
exports.show = function (req, res) {
    CompletedSurvey.findById(req.params.id, function (err, completedSurvey) {
        if (err) {
            return handleError(res, err);
        }
        if (!completedSurvey) {
            return res.send(404);
        }
        return res.json(completedSurvey);
    });
};

// Creates a new completedSurvey in the DB.
exports.create = function (req, res) {
    CompletedSurvey.create(req.body, function (err, completedSurvey) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, completedSurvey);
    });
};

// Updates an existing completedSurvey in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    CompletedSurvey.findById(req.params.id, function (err, completedSurvey) {
        if (err) {
            return handleError(res, err);
        }
        if (!completedSurvey) {
            return res.send(404);
        }
        var updated = _.merge(completedSurvey, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, completedSurvey);
        });
    });
};

// Deletes a completedSurvey from the DB.
exports.destroy = function (req, res) {
    CompletedSurvey.findById(req.params.id, function (err, completedSurvey) {
        if (err) {
            return handleError(res, err);
        }
        if (!completedSurvey) {
            return res.send(404);
        }
        completedSurvey.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}

function getCompletedSurveysByCurrentYear(req, res) {


};