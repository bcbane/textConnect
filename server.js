const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const app = express();
// const secret = require('./config')
// const plivo = require('plivo');
// const p = plivo.RestAPI({authId: secret.authId, authToken : secret.authToken});

const createAdminCtrl = require("./nodeControllers/createAdminCtrl")
const createUserCtrl = require("./nodeControllers/createUserCtrl")
const loginAdminNCtrl = require("./nodeControllers/loginAdminNCtrl")
const loginUserCtrl = require("./nodeControllers/loginUserCtrl")
const createGroupCtrl = require("./nodeControllers/createGroupCtrl")
const getGroupCtrl = require("./nodeControllers/getGroupCtrl")
const getStudentCtrl = require("./nodeControllers/getStudentCtrl")
const createStudentCtrl = require("./nodeControllers/createStudentCtrl")
const sendText = require("./plivoControllers/sendTextCtrl")
const saveText = require("./nodeControllers/saveTextCtrl")
const getUserCtrl = require("./nodeControllers/getUserCtrl")
const createNumberCtrl = require("./nodeControllers/createNumberCtrl")
const getNumberCtrl = require("./nodeControllers/getNumberCtrl")

mongoose.connect('mongodb://localhost/textconnect');

const corsOptions = {
  origin: 'http://127.0.0.1:3000/'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'))


app.post('/api/admins', createAdminCtrl.create);
"THIS SHOULDN'T BE PASSING THE PASSWORD THROUGH PARAMS AS PLAIN TEXT, THIS IS JUST FOR PROOF OF CONCEPT, AND WILL BE CHANGED"
app.get('/api/admins/:email/:password', loginAdminNCtrl.show);

app.post('/api/users', createUserCtrl.create);
app.get('/api/users', getUserCtrl.index);
"THIS SHOULDN'T BE PASSING THE PASSWORD THROUGH PARAMS AS PLAIN TEXT, THIS IS JUST FOR PROOF OF CONCEPT, AND WILL BE CHANGED"
app.get('/api/users/:username/:password', loginUserCtrl.show);

app.post('/api/groups', createGroupCtrl.create);
app.get('/api/groups', getGroupCtrl.index);

app.post('/api/students', createStudentCtrl.create);
app.get('/api/students', getStudentCtrl.index);

app.post('/api/numbers', createNumberCtrl.create);
app.get('/api/numbers', getNumberCtrl.index);

app.post('/sendm', sendText.sendM);
app.post('/api/savem', saveText.create);

// app.get('/api/history/:dst', saveText.show);


const port = 3000
app.listen(port, function() {
  console.log('Ready to server my Lord ... port: ' + port)
})
