const UserModel = require('../nodeModels/UserModel.js')

module.exports = {

  create: function(req, res, next){

    let groupsArr = [];

    for (var i = 0; i < req.body.groups.length; i++) {
      groupsArr.push(req.body.groups[i]._id);
    }

    req.body.newUser.groups = groupsArr;

    console.log(req.body.newUser);

    UserModel.create(req.body.newUser, function (err, success) {
      if(err)res.status(500).send(err)
      else res.status(200).send(success)
    })
  }
}
