var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({

  fname:{
    type: String,
    required:true
  },
  lname:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  phone:{
    type: String,
    required: true
  },
  job:{
    type: String,
    required: true
  },
  // PASSWORD CURRENTLY BEING SAVED AS PLAIN TEXT, THIS IS OBVIOUSLY INCORRECT AND IS NOT FINAL AND IS FOR PROOF OF CONCEPT ONLY
  password:{
    type: String,
    required: true
  }

})

module.exports = adminSchema;
