var mongoose = require('mongoose');
var adminSchema = require('../nodeSchemas/adminSchema');

module.exports = mongoose.model('Admins', adminSchema)
