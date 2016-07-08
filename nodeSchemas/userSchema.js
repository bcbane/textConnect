var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

  fname:{
    type: String,
    required:true
  },
  lname:{
    type: String,
    required: true
  },
  phone:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  // PASSWORD CURRENTLY BEING SAVED AS PLAIN TEXT, THIS IS OBVIOUSLY INCORRECT AND IS NOT FINAL AND IS FOR PROOF OF CONCEPT ONLY
  password:{
    type: String,
    required: true
  },
  groups:[
    {type: String, ref: 'Groups'}
  ]

})

module.exports = userSchema;
