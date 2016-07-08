const UserModel = require('../nodeModels/UserModel.js')

module.exports = {

    show: function(req, res, next) {


        UserModel.findOne({
            'username': req.params.username
        })

        .populate({
            path: 'groups',
            populate: {
                path: 'students',
                populate: {
                    path: 'messages'
                }
            }
        })

        .exec().then(function(success) {

            if (success.password !== req.params.password) {

                res.status(511).send("password incorrect")

            } else {
                console.log(success);
                // res.status(200).send(success)
                res.status(200).send(success)

            }


        })

        .catch(function(err) {

            res.status(500).send(err);

        })

    }
}
