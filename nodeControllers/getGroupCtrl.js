const GroupModel = require('../nodeModels/GroupModel.js')

module.exports = {

  index: function (req, res, next) {

    GroupModel.find(function (err, success) {

      if(err)res.status(500).send(err)
      else res.status(200).send(success)

    })

  }

}
