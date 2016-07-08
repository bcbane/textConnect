const GroupModel = require('../nodeModels/GroupModel.js')

module.exports = {

  create: function(req, res, next){
    console.log(req.body);
    GroupModel.create(req.body, function (err, success) {
      if(err)res.status(500).send(err)
      else res.status(200).send(success)
    })
  }
}
