const StudentModel = require('../nodeModels/StudentModel.js')
const GroupModel = require('../nodeModels/GroupModel.js')


module.exports = {

    create: function(req, res, next) {
        let student = new StudentModel(req.body.newStudent)
        let promiseArr = [];

        promiseArr.push(student.save());

        for (var i = 0; i < req.body.groups.length; i++) {
            promiseArr.push(GroupModel.findByIdAndUpdate(req.body.groups[i]._id, {
                $push: {
                    students: student._id
                }
            }))
        }

        Promise.all(promiseArr).then(function(response) {

            return res.status(200).send(response)
        })
          .catch(function (err) {

            return res.status(500).send(success)

          })
    }
}
