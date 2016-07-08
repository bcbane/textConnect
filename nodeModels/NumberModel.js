var mongoose = require('mongoose');
var numberSchema = require('../nodeSchemas/numberSchema');

module.exports = mongoose.model('Numbers', numberSchema)
