var mongoose = require('mongoose');
var userSchema = require('../nodeSchemas/userSchema');

module.exports = mongoose.model('Users', userSchema)
