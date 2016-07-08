var mongoose = require('mongoose');

var textSchema = new mongoose.Schema({

  src:{
    type: String,
    required: true
  },
  dst:{
    type: String,
    required: true
  },
  text:{
    type: String,
    required: true
  }

})

module.exports = textSchema;
