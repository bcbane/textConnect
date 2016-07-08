var mongoose = require('mongoose');
var textSchema = require('../nodeSchemas/textSchema');

module.exports = mongoose.model('Texts', textSchema)
