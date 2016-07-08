const NumberModel = require('../nodeModels/NumberModel.js')

module.exports = {

  create: function(req, res, next){
    console.log(req.body);
    NumberModel.create(req.body, function (err, success) {
      if(err)res.status(500).send(err)
      else res.status(200).send(success)
    })
  }
}
