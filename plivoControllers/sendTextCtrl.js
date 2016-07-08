const secret = require('../config')
const plivo = require('plivo');
const p = plivo.RestAPI({authId: secret.authId, authToken : secret.authToken});

module.exports = {
  sendM: function(req, res){

  let params = {
      'src': req.body.src, // Sender's phone number with country code
      'dst' : req.body.dst, // Receiver's phone Number with country code
      'text' : req.body.text, // Your SMS Text Message - English
      'url' : "http://example.com/report/", // The URL to which with the status of the message is sent
      'method' : "GET" // The method used to call the url
  };

  p.send_message(params, function (status, response) {
      console.log('Status: ', status);
      console.log('API Response:\n', response);
      console.log('Message UUID:\n', response['message_uuid']);
      console.log('Api ID:\n', response['api_id']);

      let messageInfo = {
        Status: status,
        Response: response
      }

  });
}}
