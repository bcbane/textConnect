const NumberModel = require('../nodeModels/NumberModel.js')

module.exports = {

  index: function (req, res, next) {

    NumberModel.find(function (err, success) {

      if(err)res.status(500).send(err)
      else res.status(200).send(success)

    })

  }

}
