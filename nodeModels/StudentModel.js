var mongoose = require('mongoose');
var StudentSchema = require('../nodeSchemas/StudentSchema');

module.exports = mongoose.model('Students', StudentSchema)
