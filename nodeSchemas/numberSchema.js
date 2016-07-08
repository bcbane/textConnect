var mongoose = require('mongoose');

var numberSchema = new mongoose.Schema({

  number:{
    type: String,
    required:true
  },
  desc:{
    type: String,
    required: true
  }

})

module.exports = numberSchema;
