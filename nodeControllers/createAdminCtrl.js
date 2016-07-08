const AdminModel = require('../nodeModels/AdminModel.js')

module.exports = {

  create: function(req, res, next){
    console.log(req.body);
    AdminModel.create(req.body, function (err, success) {
      if(err)res.status(500).send("account creation unsuccessful")
      else res.status(200).send(success)
    })
  }
}
