// example using express.js:

var express = require('express')
  , app = express.createServer();
app.use(express.bodyParser());
app.post('/', function(req, res){
  var email = req.param('email', null);  // second parameter is default
});
