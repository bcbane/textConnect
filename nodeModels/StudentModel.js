var mongoose = require('mongoose');
var studentSchema = require('../nodeSchemas/studentSchema');

module.exports = mongoose.model('Students', studentSchema)
