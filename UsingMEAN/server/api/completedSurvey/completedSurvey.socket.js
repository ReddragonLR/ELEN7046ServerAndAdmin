/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var CompletedSurvey = require('./completedSurvey.model');

exports.register = function(socket) {
  CompletedSurvey.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  CompletedSurvey.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('completedSurvey:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('completedSurvey:remove', doc);
}