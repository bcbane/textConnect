const UserModel = require('../nodeModels/UserModel.js')

module.exports = {


  index: function (req, res, next) {

    UserModel.find().populate('groups').exec(function (err, success) {

      if(err)res.status(500).send(err)
      else res.status(200).send(success)

    })

  }

}
