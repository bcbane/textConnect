const AdminModel = require('../nodeModels/AdminModel.js')

module.exports = {

  show: function (req, res, next) {

    console.log(req.body.email);

    AdminModel.findOne( {'email': req.params.email}, function (err, success) {


      if (err) res.status(500).send(err)



      else if (success.password != req.params.password){

        res.status(511).send("password incorrect")

      }
      else {
        // console.log(success);
        // res.status(200).send(success)
        res.status(200).send(success)

      }


    })

  }
}
