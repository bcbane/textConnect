const StudentModel = require('../nodeModels/StudentModel.js')

module.exports = {

  index: function (req, res, next) {

    StudentModel.find(function (err, success) {

      if(err)res.status(500).send(err)
      else res.status(200).send(success)

    })

  }

}
