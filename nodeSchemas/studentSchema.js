var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({

  name:{
    type: String,
    required:true
  },
  contact: {
    type: Array,
    required: true
  },
  messages:[
    {type: String, ref: 'Texts'}
  ]

})


module.exports = studentSchema;
