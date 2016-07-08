var mongoose = require('mongoose');
var groupSchema = require('../nodeSchemas/groupSchema');

module.exports = mongoose.model('Groups', groupSchema)
