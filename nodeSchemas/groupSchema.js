var mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({

  name:{
    type: String,
    required:true
  },
  desc:{
    type: String,
    required: true
  },
  students:[
    {type: String, ref: 'Students'}
  ]

})

module.exports = groupSchema;
