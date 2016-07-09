const textModel = require('../nodeModels/TextModel.js')
const StudentModel = require('../nodeModels/StudentModel.js')

module.exports = {

        create: function(req, res, next) {

          let text = new textModel(req.body.params)
          let promiseArr = [];

          promiseArr.push(text.save());

          promiseArr.push(StudentModel.findByIdAndUpdate(req.body.id, {
            $push : {
              messages: text._id
            }
          }))

          Promise.all(promiseArr).then(function(response) {

              return res.status(200).send(response)
          })

          .catch(function (err) {

            return res.status(500).send(success)

          })
        }

}
